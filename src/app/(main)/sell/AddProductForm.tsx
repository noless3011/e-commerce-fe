import React, { useState } from "react";
import Select from "react-select";
import { ProductType } from "@/app/types/Product";
import { CreateProductDto, CreateProductDtoTypesEnum } from "@/api";

const AddProductForm = () => {
  // CategoriesList
  const categories = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    { value: "category4", label: "Category 4" },
  ];

  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  const handleCategoryChange = (selectedOptions: any) => {
    setSelectedCategories(selectedOptions);
  };

  return (
    <div className="bg-white p-2 rounded-lg w-full max-w-4xl mx-auto">
      <form className="space-y-6">
        <div>
          <label htmlFor="product-name" className="block text-gray-700 font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Images</label>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex justify-center items-center">
            <button className="w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center text-gray-500 text-2xl font-bold hover:bg-gray-300 transition">
              +
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">You can upload up to 8 images.</p>
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter product price"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            rows={4}
            placeholder="Enter product description"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Categories</label>
          <Select
            isMulti
            name="categories"
            options={categories}
            className="basic-multi-select"
            classNamePrefix="select"
            value={selectedCategories}
            onChange={handleCategoryChange}
            placeholder="Select Categories"
            isSearchable={true}
            styles={{
              control: (base) => ({
                ...base,
                width: "100%",
                borderRadius: "8px",
                borderColor: "#ddd",
                boxShadow: "none",
                fontSize: "16px",
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: "#E5E7EB",
                color: "#333333",
                borderRadius: "4px",
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: "#333333",
                fontWeight: "600",
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: "#FF0000",
                ':hover': {
                  backgroundColor: "#FF0000",
                  color: "#FFFFFF",
                },
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected ? "#4F46E5" : state.isFocused ? "#E0E7FF" : "white",
                color: state.isSelected ? "white" : "#333333",
                padding: "10px 20px",
                fontSize: "16px",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#A0A0A0",
              }),
            }}
          />
          <p className="text-sm text-gray-500 mt-2">You can select multiple categories.</p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-darkgreen text-white font-medium rounded-lg hover:bg-green transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
