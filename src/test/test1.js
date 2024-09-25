import http from 'k6/http'
import {load_workload} from "../workload/registration_workload.js";
import {getData} from "../utils/get_data.js";
import {createCroc, createUsers, getAccessToken, getCrocDetails} from "../reusableFunctions/privateCrocsFunctions.js";

import {generateHTMLReport} from "../utils/generateReport.js";

export const options=getData(__ENV.MY_WORKLOAD)

export default function()
{
    let resp = http.get('https://test.k6.io')
}

export function handleSummary(data) {
    return generateHTMLReport(data,"test1")
}