import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function generateHTMLReport(data,testName)
{
    let htmlFilePath=`src/reports/${testName}.html`
    return {
        [htmlFilePath]: htmlReport(data)
    };
}