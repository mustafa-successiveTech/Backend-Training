import { Order } from "./model";

export const Results = async () => {
  try {
    const totalRevenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);

    console.log("Total amount :", totalRevenue);

    const totalNumberOfStatus = await Order.aggregate([
      {
        $group: {
          _id: "$status",
          totalOrders: { $sum: 1 },
        },
      },
    ]);

    console.log("TotalOrders :", totalNumberOfStatus);

    const top3Customer = await Order.aggregate([
      {
        $group: {
          _id: "$customerName",
          totalSpent: { $sum: "$totalAmount" },
        },
      },
      {
        $sort: { totalSpent: -1 },
      },
      {
        $limit: 3,
      },
    ]);

    console.log("Top3Customers :", top3Customer);

    const averageOrderAmount = await Order.aggregate([
      {
        $group: {
          _id: "$customerName",
          AverageAmount: { $sum: "$totalAmount" },
        },
      },
    ]);

    console.log("Average Order Amount :", averageOrderAmount);

    const productCount = await Order.aggregate([
      {
        $unwind: "$items",
      },
      {
        $group: {
          _id: "$items.productName",
          totalCount: { $sum: "$items.quantity" },
        },
      },
      {
        $match: {
          totalCount: { $gt: 10 },
        },
      },
    ]);

    console.log("Products with Count :", productCount);

    const last_6_month_revenue = await Order.aggregate([
      {
        $match: {
          orderDate: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
          },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$orderDate" },
            month: { $month: "$orderDate" },
          },
          monthlyRevenue: { $sum : "$totalAmount" },
        },
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": -1,
        },
      },
    ]);

    console.log("Last 6 months revenue : ", last_6_month_revenue);

    const customer_2_orders = await Order.aggregate([
        {
            "$group" : {
                "_id" : "$customerName",
                "count" : { $sum : 1 },
            }
        },
        {
            "$match" : {
                count : { "$gt" : 2 }
            }
        }
    ]);

    console.log("Customer with more than 2 orders :", customer_2_orders);

    const productNames = await Order.aggregate([
        { "$unwind" : "$items"},
        {
            "$group" : {
                "_id" : null,
                "Products" : { "$push" : "$items.productName"}
            }
        },
        {
            "$project" : {
                "_id" : 0,
                "Products" : 1
            }
        }
    ]);

    console.log(productNames);

    const DeliveredProducts = await Order.aggregate([
        {
            "$match" : { "status" : "Delivered"},
        },
        {
            "$group" : {
                "_id" : null,
                totalRevenue : { $sum : "$totalAmount"}
            }
        },
        {
            $project : {
                _id : 0,
                totalRevenue : 1
            }
        }
    ]);

    console.log("Total Revenue : ", totalRevenue);

    const totalRevenueTotalProduct = await Order.aggregate([
        { "$unwind" : "$items"},
        {
            "$group" : {
                "_id" : null,
                TotalQuantity : { $sum : "$items.quantity"},
                TotalRevenue : { $sum : "$items.price"}
            }
        },
        {
            "$project" : {
                _id : 0,
                TotalQuantity : 1,
                TotalRevenue : 1
            }
        }
    ]);

    console.log(totalRevenueTotalProduct);


  } catch (err) {
    console.log("Error in results", err);
  }
};

