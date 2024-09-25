import {load_workload, smoke} from "../workload/registration_workload.js";

export function getData(workload)
{
    if(workload==="load_workload")
        return load_workload()
    else if(workload==="smoke")
        return smoke()
}