export {};

const { feeds } = require("../../models")

async function findById(id:number) {
    const result = await feeds.findByPk(id);
    if(result === null) {
        console.log("not found");
    } else {
        return result;
    }
}

async function findAll() {
    const result = await feeds.findAll();
    if(result === null) {
        console.log("not found");
    } else {
        return result;
    }
}

export = {findById, findAll};