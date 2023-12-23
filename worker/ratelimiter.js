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
    const t0 = performance.now();

    const data = await Promise.allSettled(getAll(300))
    for (let II = 0; II < data.length; II++) {
        console.log(await data[II].value.json());

    }
    const t1 = performance.now();
    console.log(`dalam waktu  ${t1 - t0} milliseconds.`);

}

script()