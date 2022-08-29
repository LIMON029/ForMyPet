export {};

const { feeds, users, memos } = require("../../models");

async function deleteMemo() {
    const firstId = 3;
    await memos.destroy({where: {id: firstId}});

    const allMemos = await memos.findAll();
    for(let i=1; i <= allMemos.length; i++) {
        await memos.sequelize.query(`UPDATE \`memos\` SET \`id\` = ${i} WHERE \`id\` = ${allMemos[i-1].id};`);
    }
    await memos.sequelize.query(`ALTER TABLE \`memos\` AUTO_INCREMENT=${allMemos.length + 1};`);
    return 200;
}

async function findUserById(id:number) {
    const result = await users.findByPk(id);
    if(result === null) {
        console.log("not found");
    } else {
        return result;
    }
}

async function addUser() {
    const kakao_id = 212313212312;
    const nickname = "sksk";
 
    const result = await users.create({
        kakao_id,
        nickname
    });
    if(result === null) {
        console.log("not found");
    } else {
        return result;
    }
  };

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

async function addMemo() {
    const feed_type = 0;
    const title = "AA";
    const days = "월;화";
    const feeds_list = "aa;ww";
    const feeds_cnt = 2;
    const tot_cal = 2000;
    const user_id = 1;
 
    const result = await memos.create({
        feed_type, title, days, feeds_list, feeds_cnt, tot_cal, user_id
    });
    if(result === null) {
        console.log("not found");
    } else {
        return result;
    }
  };

export = {findById, findAll, findUserById, addUser, addMemo, deleteMemo};