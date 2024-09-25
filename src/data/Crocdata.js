import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export function crocodileData()
{
    let crocbody=JSON.stringify({
        name: randomString(8),
        sex: randomString(1, `MF`),
        date_of_birth: '1980-1-1'
    })

    return crocbody
}