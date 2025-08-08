import { faker } from "@faker-js/faker";
import { NextFunction, Request, Response } from "express";
import { Order } from "./model";
import { mongoDB } from "../../public/config/db";

const SeededData = async () => {
  try {
    const data = Array.from({ length: 10 }).map(() => {

      const items = Array.from({
        length: faker.number.int({ min: 5, max: 11 }),
      }).map(() => {

        const quantity = faker.number.int({ min: 5, max: 11 });
        const price = parseFloat(faker.commerce.price({ min: 10, max: 50 }));

        return { 
            productName: faker.commerce.productName(), 
            quantity, 
            price 
        };
      });

      const totalAmount = items.reduce((acc, item) => acc + item.price, 0);

      return {
        orderId : faker.string.uuid(),
        customerName : faker.person.fullName(),
        orderDate : faker.date.between({from: '2025-01-01T00:00:00.000Z', to: '2025-08-01T00:00:00.000Z' }),
        status : faker.helpers.arrayElement(['Pending','Shipped', 'Delivered' ]),
        items : items,
        totalAmount : parseFloat(totalAmount.toFixed(2))
      };
    });

    return data;
  } catch (err) {
    console.log("Error in Seeded Data", err);
  }
};

export const handleSeedData = async (req: Request, res: Response, next : NextFunction) => {
  try {
    mongoDB();

    if((await Order.countDocuments()) > 0){
        console.log("Count :", await Order.countDocuments());
        await Order.deleteMany();
    }
    
    const seedData = await SeededData();
    
    const data = await Order.insertMany(seedData);

    res.status(201).json({ msg: "Seeded data"});
    next();
    
  } catch (err) {
    console.log("Error in handleSeed", err);
  }
};
