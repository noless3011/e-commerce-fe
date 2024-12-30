// In InfoCard.tsx
import React, { useState } from 'react';
import { FiEdit, FiCheck, FiX } from 'react-icons/fi';

interface InfoCardProps<T = string> {
    title: string;
    value: T;
    onEdit: (newValue: T) => void;
    inputType?: 'text' | 'date' | 'select'; // Add 'select'
    options?: string[]; // For select input
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, onEdit, inputType = 'text', options }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(inputValue);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setInputValue(value);
        setIsEditing(false);
    };

    return (
        <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-gray-700 mb-1">{title}</h3>
                    {isEditing ? (
                        inputType === 'select' && options ? (
                            <select
                                className="border rounded p-1 text-gray-900 w-full"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            >
                                {options.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={inputType === 'date' ? 'text' : inputType} // Handle date specifically or use a date picker library
                                className="border rounded p-1 text-gray-900 w-full"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        )
                    ) : (
                        <p className="text-gray-900">{value}</p>
                    )}
                </div>
                {isEditing ? (
                    <div className="flex space-x-2">
                        <button className="text-green-500 hover:text-green-600 focus:outline-none" onClick={handleSaveClick}>
                            <FiCheck size={16} />
                        </button>
                        <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={handleCancelClick}>
                            <FiX size={16} />
                        </button>
                    </div>
                ) : (
                    <button className="text-gray-400 hover:text-gray-500 focus:outline-none" onClick={handleEditClick}>
                        <FiEdit size={16} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default InfoCard;