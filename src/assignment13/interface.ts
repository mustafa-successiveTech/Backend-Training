import mongoose, {Schema, Document} from "mongoose";

export interface IItem {
    productName : string;
    quantity : number;
    price : number;
}

export interface IOrder extends Document {
    orderId : string;
    customerName : string;
    orderDate : Date;
    status : 'Pending' | 'Shipped' | 'Delivered';
    items : IItem[];
    totalAmount : number;
}