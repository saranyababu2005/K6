import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export function newUser()
{
    let userCreds = {
        username:randomString(8),
        password:randomString(10, `aeioubcdfghijpqrstuv`)
    };
    return userCreds;
}