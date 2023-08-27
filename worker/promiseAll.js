function getList() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {return res.json()}).then((res) => {
        console.log("succes get list data");
        console.log(res);
    })
}
function geterror() {
    return fetch('https://jsonplaceholdeddr.typicode.com/posts').then((res) => {return res.json()}).then((res) => {
        console.log("succes get list data");
        console.log(res);
    })
}
const getDetailsData = (id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((res) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("exc", id);
                // console.log(res);
                resolve(res)
            }, 3000)
        })
        )
}

// getList()
// const prom = getDetailsData(2)
// console.log(prom);

const listpost = [
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

const listPromise = []
async function task(param = []){
    for (let i = 0; i < 10; i++) {
        if(i == 90){
            listPromise.push(geterror())
        }else{
            const postid  = param[i].id
            const data = getDetailsData(postid)
            listPromise.push(data)
        }

        
    }
    // console.log(listPromise);
    let resultPromise = []
    try {
        console.log(listPromise);
        // resultPromise = await Promise.all(listPromise)
        resultPromise = await Promise.allSettled(listPromise)
        // resultPromise = await Promise.any(listPromise)
        // resultPromise = await Promise.resolve(listPromise)

        
    } catch (error) {
        // console.log("terjadi rror");
        console.log(error);
    }
    console.log("out looping");
    console.log(resultPromise);
}
task(listpost)
// getDetailsData(509089).then((res)=>{
//     console.log(res);
// })