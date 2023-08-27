const fs = require("fs");
fs.readFile('./hello.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});

for (let i = 0; i < 1000; i++) {
    fs.appendFile(`tes/hello${i}.txt`, `hello from ${i}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
// const { parse } = require("csv-parse");

// // fs.createReadStream("./dummy.csv")
// //   .pipe(parse({ delimiter: ",", from_line: 999999 }))
// //   .on("data", function (row) {
// //     console.log(row);
// //   })
// //   .on("end", function () {
// //     console.log("finished");
// //   })
// //   .on("error", function (error) {
// //     console.log(error.message);
// //   });

// const daata=()=>{
//     return {
//         "data":0
//     }
// }
// console.log(parse());
// console.log(daata());
