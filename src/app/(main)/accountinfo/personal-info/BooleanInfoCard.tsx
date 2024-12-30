// BooleanInfoCard.tsx
import React, { useState } from 'react';
import { FiEdit, FiCheck, FiX } from 'react-icons/fi';

interface BooleanInfoCardProps {
    title: string;
    value: boolean | undefined;
    onEdit: (newValue: boolean) => void;
    option1?: string;
    option2?: string;
}

const BooleanInfoCard: React.FC<BooleanInfoCardProps> = ({ title, value, onEdit, option1, option2 }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value === true); // Default to false if undefined

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(inputValue);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setInputValue(value === true);
        setIsEditing(false);
    };

    return (
        <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-gray-700 mb-1">{title}</h3>
                    {isEditing ? (
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                                checked={inputValue}
                                onChange={(e) => setInputValue(e.target.checked)}
                            />
                            <span className="ml-2 text-gray-900">{inputValue ? (option1 ? option1 : "True") : (option2 ? option2 : "False")}</span>
                        </label>
                    ) : (
                        <p className="text-gray-900">
                            {value === undefined ? "Not set" : value ? (option1 ? option1 : "True") : (option2 ? option2 : "False")}
                        </p>
                    )}
                </div>
                {isEditing ? (
                    <div className="flex space-x-2">
                        <button
                            className="text-green-500 hover:text-green-600 focus:outline-none"
                            onClick={handleSaveClick}
                        >
                            <FiCheck size={16} />
                        </button>
                        <button
                            className="text-red-500 hover:text-red-600 focus:outline-none"
                            onClick={handleCancelClick}
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                ) : (
                    <button
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={handleEditClick}
                    >
                        <FiEdit size={16} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default BooleanInfoCard;