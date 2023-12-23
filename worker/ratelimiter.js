function get() {
    return fetch('http://103.79.131.43:3000')
}




// console.log(get());

function getAll(jumlah) {
    let data = []
    for (let I = 0; I < jumlah; I++) {
        let prom = get()
        data.push(prom)
    }
    // console.log(data);
    return data
}





async function script() {

    const data = await Promise.all(getAll(20))
    console.log(data);

}

script()