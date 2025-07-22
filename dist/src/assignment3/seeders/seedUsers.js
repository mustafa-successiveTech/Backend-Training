"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SeededUser;
const seededData_1 = require("./seededData");
function SeededUser(count) {
    const users = seededData_1.SeededData.slice(0, count);
    console.log(users);
    const users1 = [];
    for (let i = 0; i < count; i++) {
        users1.push(seededData_1.SeededData[i]);
    }
    return users;
}
;
