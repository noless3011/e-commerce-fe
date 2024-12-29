'use client'
import { CreateProductDto, CreateUserDto } from "@/api";
import { AuthApi, ProductApi, UserApi } from "@/app/utils/ApiClient";
import data from './data.json';

// Function to generate a random boolean for gender
function getRandomGender(): boolean {
    return Math.random() < 0.5; // 50% chance of true/false
}

// Function to generate a random birthday timestamp within a reasonable range
function generateRandomBirthday(): number {
    const now = Date.now();
    const pastDate = new Date(now - (Math.random() * 50 * 365 * 24 * 60 * 60 * 1000)); // Up to 50 years ago
    return pastDate.getTime();
}

// Function to create mock user data (matching CreateUserDto)
function createMockUser(index: number): CreateUserDto {
    const username = `testnewmockuser${index}`;
    const password = `123`; // Example password
    return {
        username: username,
        password: password,
        avatar: `https://picsum.photos/500`, // Replace with a placeholder if needed
        birthDay: 123,
        gender: getRandomGender(),
        name: `Mock User ${index + 1}`,
        address: `123 Mock Street, City ${index + 1}`,
    };
}

type ProductFromJson = {
    name: string;
    description: string;
    images: string[];
    price: number;
    discount: number;
    remaining: number;
    soldNumber: number;
    rating: number;
    types: string;
}
const Dashboard = () => {
    const numberOfUsers = 6;
    const mockUsers: Array<CreateUserDto> = [];

    for (let i = 0; i < numberOfUsers; i++) {
        mockUsers.push(createMockUser(i));
    }



    const registerMockUsers = async () => {

        console.log("Starting user registrations...");

        for (const user of mockUsers) {
            try {
                const createUserFunc = await AuthApi.authControllerRegister(user);
                const res = await createUserFunc();
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        console.log("User registration process completed.");

    }
    const addMockData = async () => {
        console.log("Starting to add mock product data...");
        for (const product of data) {
            try {
                const postProductFunc = await ProductApi.productControllerCreate(product as CreateProductDto);
                const res = await postProductFunc();
                console.log(`Product "${product.name}" added successfully:`, res);
            } catch (error) {
                console.error(`Error adding product "${product.name}":`, error);
            }
        }
        console.log("Mock product data addition completed.");
    }
    return (<div>
        <button
            onClick={registerMockUsers}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
            Register Mock Users
        </button>
        <button
            type="button"
            onClick={addMockData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Add Mock Data
        </button>
    </div>)
}
export default Dashboard;