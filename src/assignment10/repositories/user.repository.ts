import RegisterUser from "../models/user.schema";

export const CreateUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const existingUser = await RegisterUser.findOne({ email: data.email });

    if (!existingUser) {
      const user = await RegisterUser.create(data);
      console.log(user);
      return { success: true, statusCode: 201, data: user };
    }
    return { success: false, statusCode: 400, message: "User already exists" };
  } catch (error) {
    console.error("Error while creating user", error);
  }
};

export const getUser = async (data: { email: string; password: string }) => {
    console.log("5");
  try {
    const user = await RegisterUser.findOne({
      email: data.email,
    }).select("+password");

    console.log("Get user from ", user);
    return user;
  } catch (error) {
    console.error("Error while getting user", error);
  }
};
