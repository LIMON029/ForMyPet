export {};

const { feeds } = require("../../models")
async function test() {
    const result = await feeds.findByPk(1);
    if(result === null) {
        console.log("not found");
    } else {
        const {id, humidity, item_name, calorie, gram, createdAt, updatedAt} = result;
        console.log(humidity);
    }
}

function test1() {
    test();
}

test1();