import mongoose from 'mongoose';
import { IItem, IOrder } from './interface';

const itemSchema = new mongoose.Schema<IItem>({
    productName : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
});

const OrderSchema = new mongoose.Schema<IOrder>({
    orderId : {
        type : String,
        required : true
    },
    customerName : {
        type : String,
        required : true
    },
    orderDate : {
        type : Date,
        required : true,
    },
    status : {
        type : String,
        enum : ["Pending", "Shipped", "Delivered"],
        required : true,
        default : 'Pending'
    },
    items : {
        type : [itemSchema],
        required : true
    },
    totalAmount : {
        type : Number,
        required : true
    }
});

export const Order = mongoose.model<IOrder>('Order', OrderSchema);