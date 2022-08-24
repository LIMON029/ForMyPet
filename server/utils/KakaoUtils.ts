export {};

const { default: axios } = require('axios');
const K = require('../../src/GlobalVariables');

async function unlink(user_id) {
    const data = {
        target_id_type: "user_id",
        target_id: user_id
    };

    const queryString = Object.keys(data)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');

    const result = await axios.post(`${K.KAKAO_API_URL}/v1/user/unlink`, queryString, {
        headers: {
            "Authorization": `KakaoAK ${K.KAKAO_ADMIN_KEY}`
        }
    });
    return result.data.id;
}

async function getToken(code) {
    const data = {
        grant_type: "authorization_code",
        client_id: K.KAKAO_REST_KEY,
        redirect_uri: K.KAKAO_REDIRECT_URL,
        code: code,
        client_secret: K.KAKAO_CLIENT_SECRET
    };

    const queryString = Object.keys(data)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');

    axios.post(
        "https://kauth.kakao.com/oauth/token", queryString, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then( (res) => {
        // saveToken(res.data.access_token);
    });
}

async function getProfile(access_token) {
    const result = await axios.post(`${K.KAKAO_API_URL}/v2/user/me`, null, {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }
    });
    return result.data.id;
}

function saveToken(token) {
    axios.post(`${K.SERVER_URL}/auth/getJwtToken`, {
        access_token: token
    }).then(res => {
        if(res.status == 200 || res.status == 201) {
            const jwtToken = res.data.jwt;
            window.localStorage.setItem("token", JSON.stringify(
                {access_token: res.data.jwt}
            ));
        } else {
            window.alert("Login Failed");
        }
    });
}

export {unlink, getToken, getProfile, saveToken};