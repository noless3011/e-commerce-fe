'use client'
import React, { useState, useCallback, useEffect } from 'react';
import InfoCard from "./InfoCard";
import { UserApi } from '@/app/utils/ApiClient';
import { UpdateUserDto } from '@/api';
import BooleanInfoCard from './BooleanInfoCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
function convertSecondsSinceEpochToDateString(seconds: number): string {
    /**
     * Converts a number of seconds since the Unix epoch to a date string in 'dd/mm/yyyy' format.
     *
     * @param {number} seconds The number of seconds since the Unix epoch.
     * @returns {string | undefined} The date string in 'dd/mm/yyyy' format, or undefined if the input is invalid.
     */
    if (isNaN(seconds)) {
        return "";
    }

    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
function convertToSecondsSinceEpoch(dateString: string): number | undefined {
    /**
     * Converts a date string in 'dd/mm/yyyy' format to the number of seconds since the Unix epoch (1970-01-01T00:00:00Z).
     *
     * @param {string} dateString The date string in 'dd/mm/yyyy' format.
     * @returns {number | undefined} The number of seconds since the epoch, or undefined if the date string is invalid.
     */
    const [day, month, year] = dateString.split('/');

    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (isNaN(parsedDay) || isNaN(parsedMonth) || isNaN(parsedYear) ||
        parsedDay < 1 || parsedDay > 31 ||
        parsedMonth < 1 || parsedMonth > 12 ||
        parsedYear < 0) {
        return undefined;
    }

    const date = new Date(parsedYear, parsedMonth - 1, parsedDay);

    if (isNaN(date.getTime())) {
        return undefined;
    }

    return Math.floor(date.getTime() / 1000);
}

const Info = () => {
    // State for managing the values and edit mode of each card
    const [name, setName] = useState("Irakli talavadze");
    const [birthDate, setBirthDate] = useState("07/07/1993");
    const [address, setAddress] = useState("Georgia , Tbilisi");
    const [gender, setGender] = useState<boolean | undefined>(undefined);

    const currentUser = useSelector((state: RootState) => state.auth.user);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated && currentUser) {
            setName(currentUser.name);
            setBirthDate(convertSecondsSinceEpochToDateString(currentUser.birthDay));
            setGender(currentUser.gender);
            setAddress(currentUser.address);
        }
    }, [isAuthenticated]);
    const handleEditName = useCallback((newValue: string) => {
        setName(newValue);
    }, []);

    const handleEditBirthDate = useCallback((newValue: string) => {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (dateRegex.test(newValue)) {
            setBirthDate(newValue);
        } else {
            alert("Invalid date format. Please use dd/mm/yyyy.");
        }
    }, []);

    const handleEditAddress = useCallback((newValue: string) => {
        setAddress(newValue);
    }, []);

    const handleEditGender = useCallback((newValue: boolean) => {
        setGender(newValue);
    }, []);

    const handleSave = useCallback(async () => {
        try {
            const birthdaySeconds = convertToSecondsSinceEpoch(birthDate);
            const dto: UpdateUserDto = {
                name: name,
                avatar: currentUser?.avatar || "",
                birthDay: birthdaySeconds,
                gender: gender,
                address: address,
            };
            // Only attempt to update if birthday is valid and gender is defined
            if (birthdaySeconds !== undefined && gender !== undefined) {
                const updateInfoFunc = await UserApi.userControllerUpdateUserInfo(dto);
                await updateInfoFunc();
                console.log("User information updated successfully!");
            } else {
                console.warn("Skipping API update due to invalid birthday or undefined gender.");
            }
        } catch (error) {
            console.error("Error updating user info:", error);
        }
    }, [name, birthDate, address, gender]);

    return (<div className="flex-1">
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Personal information</h2>
            <p className="text-gray-600 text-sm">
                Manage your personal information, including phone numbers and email adress where you can be contacted
            </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <InfoCard title="Name" value={name} onEdit={handleEditName} />

            {/* Date of Birth */}
            <InfoCard title="Date of Birth" value={birthDate} onEdit={handleEditBirthDate} />

            {/* Address */}
            <InfoCard title="Address" value={address} onEdit={handleEditAddress} />

            {/* Gender */}
            <BooleanInfoCard title="Gender" value={gender} onEdit={handleEditGender} option1='Male' option2='Female' />
        </div>
        <div className="mt-6">
            <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSave}
            >
                Save Changes
            </button>
        </div>
    </div>)
}

export default Info;