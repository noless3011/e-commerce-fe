import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import InfoCard from './InfoCard';
const PersonalInformationSection: React.FC = () => {
    return (
        <div className="flex-1">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">Personal information</h2>
                <p className="text-gray-600 text-sm">
                    Manage your personal information, including phone numbers and email adress where you can be contacted
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <InfoCard title="Name" value="Irakli talavadze" />
                <InfoCard title="Date of Birth" value="07 July 1993" />
                <InfoCard title="Country Region" value="Georgia , Tbilisi" />
                <InfoCard title="Language" value="English" />
                <InfoCard title="Contactable at" value="ikakodesign@gmail.com" />
            </div>

            
        </div>
    );
};

export default PersonalInformationSection;