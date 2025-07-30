import { createUser } from "../repositories/user.repository";
import { getUser } from "../repositories/user.repository";

export const handleUserCreation = async (data : {name : string, email : string}) => {
    if (!data.name || !data.email) {
        console.log("Name and email required");
        throw new Error('Name and email are required');
    }
    console.log("CreateUser");
    return await createUser(data);
}

export const handleGetUser = async () => { 
    console.log("GetUser");
    return await getUser();
}