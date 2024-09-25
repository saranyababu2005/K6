// export function load_workload() {
//     let stage="second_function";
//     eval(stage+"()")
//     let load = {
//         stages: [
//             {
//                 duration: '1s',
//                 target: 1
//             },
//             {
//                 duration: '1s',
//                 target: 1
//             },
//             {
//                 duration: '1s',
//                 target: 0
//             }
//         ]
//     }
//     return {load};
// }

// export function second_function()
// {
//     console.log("second")
// }
 let thre={
    http_req_failed:['rate===0.00'],
    checks:['rate===1']

}
export const load_workload=()=>({
    stages:[
        {
            duration: '10s',
            target:10
        },
        {
            duration: '30s',
            target:10
        },
        {
            duration: '10s',
            target:0
        }
    ],
    thresholds:thre
})

export const smoke=()=>({
    vus:1,
    duration: '2s',
    thresholds:thre
})

export const soak=()=>({
    stages:[
        {
            duration: '10m',
            target:1000
        },
        {
            duration: '10h',
            target:1000
        },
        {
            duration: '10m',
            target:0
        }
    ],
    thresholds:thre
})

export const spike=()=>({
    stages:[
        {
            duration: '10s',
            target:100
        },
        {
            duration: '10s',
            target:1000
        },
        {
            duration: '10s',
            target:0
        }
    ],
    thresholds:thre
})

export const stress=()=>({
    stages:[
        {
            duration: '10s',
            target:1000
        },
        {
            duration: '30s',
            target:1000
        },
        {
            duration: '10s',
            target:0
        }
    ],
    thresholds:thre
})