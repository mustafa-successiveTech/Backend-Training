# MongoDB Aggregation: 

This repository provides a complete and beginner-friendly guide to MongoDB Aggregation Framework, with all major stages explained with examples and use-cases.

---

## What is MongoDB Aggregation?

Aggregation is a powerful way to process data records and return computed results. It works through a pipeline of stages, where each stage transforms documents and passes them to the next.

---

## Aggregation Pipeline Structure

db.collection.aggregate([
  { stage1 },
  { stage2 },
  { stage3 }
]);

Each stage performs a specific operation, like filtering, grouping, reshaping, sorting, or joining data.

### Common  Aggregation Stages
Stage	Purpose
$match	Filters documents (like SQL WHERE)
$project	Reshapes documents
$group	Groups data and computes results
$sort	Sorts documents
$limit	Limits number of output documents
$skip	Skips a number of documents
$lookup	Performs JOIN with other collection
$unwind	Deconstructs arrays into docs
$addFields	Adds new computed fields
$count	Counts number of documents
$facet	Runs multiple pipelines in parallel
$bucket	Categorizes into defined ranges
$out	Writes output to a collection

## $match: Filtering Documents

db.orders.aggregate([
  { $match: { status: "Delivered" } }
]);
Filters documents based on conditions. Should be used early for performance optimization.

### $project: Reshaping Documents

db.users.aggregate([
  {
    $project: {
      name: 1,
      email: 1,
      isAdult: { $gte: ["$age", 18] }
    }
  }
]);
Selects specific fields or creates new ones.

### $group: Grouping & Aggregating

db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$amount" },
      orders: { $sum: 1 }
    }
  }
]);

## Accumulator operators: $sum, $avg, $min, $max, $push, $addToSet

### $sort: Sorting Results

db.products.aggregate([
  { $sort: { price: -1 } }
]);
1 = Ascending

-1 = Descending

### $limit and $skip: Pagination

db.users.aggregate([
  { $skip: 10 },
  { $limit: 5 }
]);

### $lookup: Joining Collections

db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
]);
Performs a left outer join with another collection.

### $unwind: Deconstruct Arrays

db.blogs.aggregate([
  { $unwind: "$tags" }
]);
Each element of the array becomes a new document.

### $addFields: Add Computed Fields

db.students.aggregate([
  { $addFields: { result: { $cond: [ { $gte: ["$marks", 50] }, "Pass", "Fail" ] } } }
]);

### $count: Counting Documents

db.orders.aggregate([
  { $match: { status: "Pending" } },
  { $count: "pendingOrders" }
]);

### $facet: Multi-purpose Pipelines

db.products.aggregate([
  {
    $facet: {
      "byCategory": [
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ],
      "topRated": [
        { $sort: { rating: -1 } },
        { $limit: 5 }
      ]
    }
  }
]);
Allows multiple aggregation pipelines in one query.

### $bucket: Group by Ranges

db.sales.aggregate([
  {
    $bucket: {
      groupBy: "$amount",
      boundaries: [0, 100, 500, 1000],
      default: "Others",
      output: {
        count: { $sum: 1 }
      }
    }
  }
]);

### Real Use Case: Total Revenue from Delivered Orders

db.orders.aggregate([
  { $match: { status: "Delivered" } },
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: "$totalAmount" }
    }
  }
]);

### Using Aggregation in Node.js (Mongoose)

Order.aggregate([
  { $match: { status: "Delivered" } },
  {
    $group: {
      _id: "$customerId",
      total: { $sum: "$totalAmount" }
    }
  }
]);

## Tips
Always use $match early to reduce data

Use $project to limit unnecessary fields

Index fields used in $match and $sort

Test pipelines in MongoDB Compass or Playground

### Advanced Aggregation Stages

Stage	Description
$redact	Filters based on conditions inside document
$merge	Writes aggregation result to another collection
$graphLookup	Performs recursive joins (tree-like data)
$text, $regex	Advanced searching techniques


