import User from "../models/user.schema";

export const createUser = (data: { name: string; email: string }) => {
  try {
    return User.create(data);
  } catch (err) {
    console.log("Error creating user", err);
  }
};

export const getUser = async () => {
  try {
    const user = await User.find();
    console.log(user);
    return user;
  } catch (err) {
    console.log("Error getting user", err);
  }
};
