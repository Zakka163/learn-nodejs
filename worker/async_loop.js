let resultprom = null
const promiseundef = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("result promise")
    }, 300)
})



function changedata(par) {
    console.log("cahnge ", par)
}

 
function excprom() {
    promiseundef.then((res) => {
        resultprom = res
        console.log(resultprom);
        changedata(res)
    }
    ).catch((err) => {
        console.log(err);
    })
}

async function excpromawait() {
    // console.log(awpromiseundef);
    const result  = await promiseundef
    console.log(result);
    changedata(result)
}


// excprom()
// // console.log("hello");




function getListwithjson() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
}

function getList() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((res) => {
        console.log("succes get list data");
        console.log(res);
    })
}

function getDetailsData(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((res) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("exc req ", id);
                // console.log(res);
                resolve(res)
            }, 3000)
        })
        )
}



function getAllblogs(paramlist = []){
    let detailArr = []
    for (let i = 0; i < 10; i += 1) {
        let detailsid = paramlist[i].id
        getDetailsData(detailsid).then((res)=>{
            detailArr.push(res)
            // console.log(res);

        })
        
    }
    console.log("exec out for");
    console.log(detailArr);
}


async function getAllblogswithawait(paramlist = []){
    let detailArr = []
    for (let i = 0; i < 10; i += 1) {
        let detailsid = paramlist[i].id
        let tempdata = await getDetailsData(detailsid)
        // console.log("push");
        detailArr.push(tempdata)
        
    }
    console.log("exec out for");
    console.log(detailArr);

}

// async function getAllblogsawait(paramlist = []){
//     let detailArr = []
//     for (let i = 0; i < 10; i += 1) {
//         let detailsid = paramlist[i].id
//         let tempdata = await getDetailsData(detailsid)
//         console.log("push");
//         detailArr.push(tempdata)
        
//     }
//     console.log("exec out for");
//     console.log(detailArr);

// }

// getAllblogs(
    // [
    //     {"id":12},
    //     {"id":1},
    //     {"id":2},
    //     {"id":3},
    //     {"id":4},
    //     {"id":5},
    //     {"id":6},
    //     {"id":7},
    //     {"id":8},
    //     {"id":9},
    //     {"id":10},
    //     {"id":11}

    // ]
// )
// getDetailsData(1)
//     .then((res)=>{
//     console.log("result :",res.body);
// })
// getListwithjson().then((res)=>{
//     console.log(res);
// })



getAllblogswithawait(
    [
        {"id":1},
        {"id":2},
        {"id":3},
        {"id":4},
        {"id":5},
        {"id":6},
        {"id":7},
        {"id":8},
        {"id":9},
        {"id":10},
        {"id":11}

    ]
)