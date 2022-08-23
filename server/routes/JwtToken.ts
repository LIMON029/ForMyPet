export {};

const jwt = require('jsonwebtoken');
const KEY = require("../../src/GlobalVariables");

type User = { id: number, nickname: string}
type SIGNTYPE = "ACCESS"|"REFRESH";
const JWT_KEY = {"ACCESS": KEY.JWT_ACCESS_KEY, "REFRESH": KEY.JWT_REFRESH_KEY};

function createToken(user: User, signType: SIGNTYPE): void {
    const expiresTime = signType === "ACCESS" ? "1s" : "90 days";
    const token = jwt.sign({
        id: user.id, nickname: user.nickname
    }, JWT_KEY[signType], {expiresIn: expiresTime, algorithm: 'HS256'});
    setTimeout(function() {
        try {
            const result = jwt.verify(token, JWT_KEY[signType], {algorithm: 'HS256'});
            console.log(result);
        } catch {
            console.log("expired");
        }
    }, 3000);
}

createToken({id: 1, nickname: "aa"}, "ACCESS");