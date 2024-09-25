import http from 'k6/http'
import {newUser} from "../data/Usercreds.js";
import {crocodileData} from "../data/Crocdata.js";

export function createUsers()
{
    const userCreds=newUser()

    const params = {
        headers:
            {
                'Content-Type': 'application/json'

            }
    }
    const resp = http.post('https://test-api.k6.io/user/register/',JSON.stringify(userCreds),params)
    console.log(resp)
    return userCreds
}

export function getAccessToken(body)
{
    const params = {
        headers:
            {
                'Content-Type': 'application/json'

            }
    }
    let resp=http.post('https://test-api.k6.io/auth/token/login/',JSON.stringify(body),params)
    const accessToken=resp.json().access;
    return accessToken

}

export function createCroc(accessToken)
{


    let resp=http.post('https://test-api.k6.io/my/crocodiles/',crocodileData(),{
        headers:
            {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
    })
    return resp.json().id
}

export function getCrocDetails(id,accessToken)
{
    let resp=http.get(`https://test-api.k6.io/my/crocodiles/${id}/`,
        {
            headers:
                {
                    Authorization: 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                }
        })

    return resp
}