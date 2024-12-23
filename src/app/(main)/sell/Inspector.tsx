'use client';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Product, { ProductType } from "@/app/types/Product";
import { useState, useEffect } from "react";
import { FileUploadApi } from "@/app/utils/ApiClient";
import { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';

const Inspector = () => {
    const inspectedProduct = useSelector((state: RootState) => state.inspector.viewProduct);
    const isExpanded = !!inspectedProduct;
    const [editableProduct, setEditableProduct] = useState<Partial<Product>>({});
    const dispatch = useDispatch();
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    useEffect(() => {
        if (inspectedProduct) {
            setEditableProduct({
                id: inspectedProduct.id,
                name: inspectedProduct.name,
                description: inspectedProduct.description,
                price: inspectedProduct.price,
                discount: inspectedProduct.discount,
                remaining: inspectedProduct.remaining,
                types: inspectedProduct.types,
                images: inspectedProduct.images,
            });
        } else {
            setEditableProduct({});
        }
    }, [inspectedProduct]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'price' || name === 'discount' || name === 'remaining') {
            setEditableProduct(prev => ({ ...prev, [name]: parseFloat(value) }));
        } else if (name === 'types') {
            const selectedOptions: ProductType[] = Array.from((e.target as HTMLSelectElement).selectedOptions, option => option.value as ProductType);
            setEditableProduct(prev => ({ ...prev, [name]: selectedOptions }));
        }
        else {
            setEditableProduct(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setUploading(true);
            setUploadError(null);
            try {
                const uploadPromises = Array.from(files).map(async (file) => {
                    const uploadFunc = await FileUploadApi.fileUploadControllerUploadSingle(file);
                    const res = await uploadFunc();
                    // Assuming the API returns the URL of the uploaded image in the response data
                    // You'll need to adjust this based on your actual API response structure
                    const imageUrl = res.data as unknown as string; // Or however your API returns the URL
                    return imageUrl;
                });

                const uploadedImageUrls = await Promise.all(uploadPromises);

                setEditableProduct(prev => ({
                    ...prev,
                    images: [...(prev.images || []), ...uploadedImageUrls],
                }));
            } catch (error: any) {
                console.error("Error uploading image:", error);
                setUploadError("Failed to upload image. Please try again.");
            } finally {
                setUploading(false);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editableProduct.id) {
            dispatch({ type: 'inspector/setSentProduct', payload: editableProduct as Product });
            // TODO: Add API call to update the product with all the details including images
            console.log("Product to be updated:", editableProduct);
        }
    };

    const handleRemoveImage = (indexToRemove: number) => {
        setEditableProduct(prev => ({
            ...prev,
            images: prev.images?.filter((_, index) => index !== indexToRemove),
        }));
        // Optionally, you might want to call an API to delete the image from the server
    };

    if (!inspectedProduct) {
        return (
            <aside className={`bg-white h-full flex flex-col gap-10 transition-all duration-200 items-center w-16  overflow-hidden`}>
                <p className="text-center">No product selected.</p>
            </aside>
        );
    }

    return (
        <aside
            className={`bg-white h-full flex flex-col gap-4 p-4 transition-all duration-200 ${isExpanded ? 'w-96' : 'w-16'} overflow-hidden`}
        >
            <h2 className="text-lg font-semibold">Edit Product</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={editableProduct.name || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={editableProduct.description || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={editableProduct.price || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount</label>
                    <input
                        type="number"
                        id="discount"
                        name="discount"
                        value={editableProduct.discount || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="remaining" className="block text-sm font-medium text-gray-700">Remaining Stock</label>
                    <input
                        type="number"
                        id="remaining"
                        name="remaining"
                        value={editableProduct.remaining || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="types" className="block text-sm font-medium text-gray-700">Types</label>
                    <select
                        id="types"
                        name="types"
                        multiple
                        value={editableProduct.types || []}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="Electronic">Electronic</option>
                        <option value="Clothing">Clothing</option>
                        <option value="HomeAppliance">HomeAppliance</option>
                        {/* Add other product types as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                    <input
                        type="file"
                        id="images"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                    {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
                    {uploadError && <p className="text-sm text-red-500">{uploadError}</p>}
                    <div className="mt-2 flex space-x-2">
                        {editableProduct.images && editableProduct.images.map((imgUrl, index) => (
                            <div key={index} className="relative">
                                <img src={imgUrl} alt={`Product Image ${index}`} className="w-20 h-20 object-cover rounded" />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-0 right-0 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-red-500 hover:bg-gray-300"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <button type="submit" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Save Changes
                    </button>
                </div>
            </form>
        </aside>
    );
};
export default Inspector;
