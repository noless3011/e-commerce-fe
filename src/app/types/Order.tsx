import { CreateOrderDto, CreateOrderDtoStatusEnum } from "@/api";

export type OrderStatus = "active" | "canceled" | "purchased" | "preparing" | "inCart"; // Extendable for other statuses

export default interface Order {
    status: OrderStatus;
    ownerId: number;
    productId: number;
    address: string;
    amount: number;
    createdTime: number;
    purchasedTime: number | null;
};

export function convertOrderToCreateOrderDto(order: Order): CreateOrderDto {
    let dtoStatus: CreateOrderDtoStatusEnum;

    switch (order.status) {
        case "active":
            dtoStatus = "active";
            break;
        case "canceled":
            dtoStatus = "canceled";
            break;
        case "purchased":
            dtoStatus = "purchased";
            break;
        case "preparing":
            dtoStatus = "preparing";
            break;
        case "inCart":
            dtoStatus = "inCart";
            break;
        default:
            // Handle unexpected or unmapped statuses (optional, but recommended)
            console.warn(`Unmapped OrderStatus: ${order.status}. Defaulting to inCart.`);
            dtoStatus = "inCart";
            break;
    }

    const createOrderDto: CreateOrderDto = {
        status: dtoStatus,
        productId: order.productId,
        address: order.address,
        amount: order.amount,
    };

    return createOrderDto;
}