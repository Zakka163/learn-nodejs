const hari = {
    "senin": [],
    "selasa": [],
    "rabu": [],
    "kamis": [],
    "jumat": [],
    "sabtu": [],
    "minggu": []
}
function delhari(day) {
    let delhar = []
    for (let i = day; i < 7; i++) {
        delhar.push(Object.keys(hari)[i])
    }
    for (let i = 0; i < delhar.length; i++) {
        delete hari[delhar[i]]
    }
}
function pickday(day, amount) {
    if (day > amount) return console.log("error")
    if (day > 7) day = 7
    let i = 0
    if (day < 7) delhari(day)
    for (let index = 0; index < amount; index++) {
        if (i >= day) {
            i = 0
        }
        hari[Object.keys(hari)[i]].push('1')
        i++
    }
    console.log(hari);
}




pickday(process.argv[2], process.argv[3])