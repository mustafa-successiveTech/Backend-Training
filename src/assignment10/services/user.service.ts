import { CreateUser, getUser } from "../repositories/user.repository";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  if (!data.name) {
    console.log("Name is required");
    throw new Error("Name is required");
  }

  if (!data.email) {
    console.log("Email is required");
    throw new Error("Email is required");
  }

  if (!data.password) {
    console.log("Password is required");
    throw new Error("Password is required");
  }

  console.log("Created User");
  return await CreateUser(data);
};

export const loginUser = async (data: { email: string; password: string }) => {
    console.log("4");
  if (!data.email) {
    console.log("Email is required");
    throw new Error("Email is required");
  }
  if (!data.password) {
    console.log("Password is required");
    throw new Error("Password is required");
  }
  return getUser(data);
};
