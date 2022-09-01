export {};

const { feeds, users, memos } = require("../../models");

type FeedType = 0 | 1 | 2;

interface Memo {
     feed_type:FeedType;
     title:string;
     days:string;
     feeds_list:string;
     feeds_cnt:number;
     tot_cal:number;
     user_id:number;
}

async function deleteMemo(id:number) {
    await memos.destroy({where: {id: id}});

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

async function addUser(kakao_id:number, nickname:string) {
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

async function addMemo({feed_type, title, days, feeds_list, feeds_cnt, tot_cal, user_id}: Memo) {
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