// data/products.ts
import { CreateProductDto } from '@/api';
import { ProductApi } from '@/app/utils/ApiClient';

const dummy: CreateProductDto[] = [
    {
        "name": "Electronic Gadget 1",
        "description": "A versatile electronic gadget for your everyday needs.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 49.99,
        "discount": 0.05,
        "remaining": 75,
        "soldNumber": 25,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Fresh Apples",
        "description": "Crisp and delicious apples, perfect for a healthy snack.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.50,
        "discount": 0,
        "remaining": 120,
        "soldNumber": 50,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Bluetooth Headphones",
        "description": "High-quality Bluetooth headphones for immersive audio experience.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 79.99,
        "discount": 0.10,
        "remaining": 60,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Organic Milk",
        "description": "Fresh and creamy organic milk.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 3.99,
        "discount": 0,
        "remaining": 90,
        "soldNumber": 35,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Smartwatch",
        "description": "A feature-packed smartwatch to track your fitness and stay connected.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 149.99,
        "discount": 0.02,
        "remaining": 45,
        "soldNumber": 55,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Brown Rice",
        "description": "Nutritious and wholesome brown rice.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.80,
        "discount": 0,
        "remaining": 150,
        "soldNumber": 60,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse for comfortable computing.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 24.50,
        "discount": 0,
        "remaining": 80,
        "soldNumber": 30,
        "rating": 4.4,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Fresh Bananas",
        "description": "Ripe and delicious bananas, a great source of potassium.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 0.99,
        "discount": 0,
        "remaining": 200,
        "soldNumber": 70,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Portable Charger",
        "description": "Compact and powerful portable charger for your devices.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 29.99,
        "discount": 0.08,
        "remaining": 70,
        "soldNumber": 35,
        "rating": 4.6,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Whole Wheat Bread",
        "description": "Healthy and nutritious whole wheat bread.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 3.20,
        "discount": 0,
        "remaining": 100,
        "soldNumber": 45,
        "rating": 4.5,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "USB Flash Drive",
        "description": "Reliable USB flash drive for data storage and transfer.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 12.75,
        "discount": 0,
        "remaining": 95,
        "soldNumber": 20,
        "rating": 4.3,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Cheddar Cheese",
        "description": "Sharp and flavorful cheddar cheese.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 4.50,
        "discount": 0.03,
        "remaining": 85,
        "soldNumber": 40,
        "rating": 4.7,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Keyboard",
        "description": "Comfortable and responsive keyboard for efficient typing.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 35.50,
        "discount": 0,
        "remaining": 65,
        "soldNumber": 28,
        "rating": 4.4,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Pasta",
        "description": "High-quality pasta for delicious meals.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.50,
        "discount": 0,
        "remaining": 130,
        "soldNumber": 55,
        "rating": 4.6,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Webcam",
        "description": "High-definition webcam for clear video calls and streaming.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 59.99,
        "discount": 0.12,
        "remaining": 50,
        "soldNumber": 60,
        "rating": 4.8,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Eggs",
        "description": "Fresh and nutritious eggs.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.80,
        "discount": 0,
        "remaining": 110,
        "soldNumber": 50,
        "rating": 4.9,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Tablet",
        "description": "Powerful tablet for entertainment and productivity.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 299.00,
        "discount": 0.05,
        "remaining": 35,
        "soldNumber": 45,
        "rating": 4.7,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Tomatoes",
        "description": "Juicy and ripe tomatoes, perfect for salads and cooking.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 2.00,
        "discount": 0,
        "remaining": 160,
        "soldNumber": 65,
        "rating": 4.6,
        "types": [
            "Groceries"
        ]
    },
    {
        "name": "Monitor",
        "description": "High-resolution monitor for crisp and clear visuals.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 179.50,
        "discount": 0.03,
        "remaining": 40,
        "soldNumber": 38,
        "rating": 4.5,
        "types": [
            "Electronic"
        ]
    },
    {
        "name": "Potatoes",
        "description": "Versatile and essential potatoes for various dishes.",
        "image": [
            "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300",
        ],
        "price": 1.20,
        "discount": 0,
        "remaining": 180,
        "soldNumber": 75,
        "rating": 4.8,
        "types": [
            "Groceries"
        ]
    }
];
export const addProduct = async () => {
    for (const product of dummy) {
        const postProductFunc = await ProductApi.productControllerCreate(product);
        try {
            const res = await postProductFunc();
            console.log(`Product "${product.name}" added successfully:`, res);
        } catch (error) {
            console.error(`Error adding product "${product.name}":`, error);
        }
    }
    console.log("Finished adding all products.");
};
