export interface Item {
    id: number;
    name: string;
    imgUrl: string;
}

export interface Cart extends Item {
    quantity: number;
}