import { CreateOrderDto, CreateOrderDtoStatusEnum, OrderResponse } from "@/api";

export type OrderStatus = "active" | "canceled" | "purchased" | "preparing" | "inCart"; // Extendable for other statuses

export default interface Order {
    id: number;
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
export function convertToOrder(dto: OrderResponse): Order {
    return {
        id: dto.id,
        status: dto.status as OrderStatus, // Type assertion as OrderResponseDto might have more string values
        ownerId: dto.ownerId,
        productId: dto.productId,
        address: dto.address,
        amount: dto.amount,
        createdTime: dto.createdTime,
        purchasedTime: dto.purchasedTime, // Assuming purchasedTime is always present in the DTO, otherwise handle nullable
    };
}

export function convertToOrders(dtos: OrderResponse[]): Order[] {
    return dtos.map(dto => convertToOrder(dto));
}