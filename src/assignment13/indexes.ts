import { Order } from "./model";

export const checkIndex = async () => {
  const indexes = await Order.collection.getIndexes();
  console.log("Indexes :", indexes);

//   const createIndex = await Order.collection.createIndex({ customerName: 1 });
//   console.log("CreateIndex :", createIndex);

  const obs1 = await Order.collection
    .find({
      status: "Delivered",
      orderDate: { $lt: new Date("2025-08-06T00:00:00Z") },
    })
    .explain("executionStats");

    console.log("Observation Before :", obs1);

  const customIndex = await Order.collection.createIndex({
    status: 1,
    orderDate: -1,
  });
  console.log("Custom Index :", customIndex);

  const obs2 = await Order.collection
    .find({
      status: "Delivered",
      orderDate: { $lt: new Date("2025-08-06T00:00:00Z") },
    })
    .explain("executionStats");

    console.log("Observation After :", obs2);

    const productName_index = await Order.collection.createIndex({ "items.productName" : "text" });

    console.log("ProductName Index :", productName_index);

    Order.collection.dropIndex('customIndex');

  return;
};
