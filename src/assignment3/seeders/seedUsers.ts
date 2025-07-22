import { SeededData } from "./seededData";

type User = {
    id: number;
    name: string;
    age: number
};

export default function SeededUser (count : number ) : User[] {
    const users = SeededData.slice(0, count);
    console.log(users);

    const users1 = [];
    for (let i = 0; i < count; i++) {
        users1.push(SeededData[i]);
    }
    return users;
};