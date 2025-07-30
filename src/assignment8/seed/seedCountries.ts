import mongoose from "mongoose";
import dotenv from "dotenv";
import Country from "../models/Country";

const countries = [
  { name: 'France', code: 'FR'},
  { name: "India", code: "IN" },
  { name: "USA", code: "US" },
  { name: "UK", code: "UK" },
];

export const seedCountries = async () => {
  try {
    console.log("Connected in seed");
    await Country.deleteMany();
    const data = await Country.insertMany(countries);
    console.log(data);
  } catch (error) {
    console.error("Seed error", error);
    process.exit(1);
  }
};
