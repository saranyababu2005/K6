import http from 'k6/http'
import {load_workload} from "../workload/registration_workload.js";
import {getData} from "../utils/get_data.js";
import {createCroc, createUsers, getAccessToken, getCrocDetails} from "../reusableFunctions/privateCrocsFunctions.js";

import {generateHTMLReport} from "../utils/generateReport.js";

export const options=getData(__ENV.MY_WORKLOAD)

export default function()
{
    let userDetails=createUsers()
    console.log(userDetails)
    let token=getAccessToken(userDetails)
    console.log(token)
    let crocId=createCroc(token)
    console.log(crocId)
    let crocDetails=getCrocDetails(crocId,token)
    console.log(crocDetails.json().id)
    console.log(crocDetails.json().name)
    console.log(crocDetails.json().sex)
    console.log(crocDetails.json().date_of_birth)
}

export function handleSummary(data) {
   return generateHTMLReport(data,"privateCroc")
}