const fs = require("node:fs");
const { parse } = require("csv-parse");
// // const dotenv = require('dotenv').config({ path:'./src/.env' })
// // console.log(process.env)
// const { Sequelize,DataTypes } = require('sequelize');



// function connection(){
//     const sq = new Sequelize("noteapp", "postgres", "root", {
//         host: "localhost",
//         port: "5431",
//         dialect: "postgres",
//         logging: false,
//         dialectOptions: {
//         dateStrings: true,
//         typeCast: true,
//         },
//         // pool: {
//         //   max: 100,
//         //   min: 0,
//         //   idle: 10000,
//         //   acquire: 60000,
//         // },
//         // timezone: '+07:00'
//         });
//     return sq
// }

// function dbsync(db){
// db.sync({ alter: true}).then(() => {
//     console.log('Database Berhasil di Sinkronisasi');
//     console.log('disconnecting...');
//     process.exit(0);
// }).catch(e => {
//     console.log(e)
// });

// }
// function model(sq){


// const contoh = sq.define('contoh', {
//     GlobalRank: {
//         type: DataTypes.STRING
//     },
//     TldRank: {
//         type: DataTypes.STRING
//     },
//     Domain: {
//         type: DataTypes.STRING
//     },
//     TLD: {
//         type: DataTypes.STRING
//     },
//     RefSubNets: {
//         type: DataTypes.STRING
//     },
//     RefIPs: {
//         type: DataTypes.STRING
//     },
//     IDN_Domain: {
//         type: DataTypes.STRING
//     },
//     IDN_TLD: {
//         type: DataTypes.STRING
//     },
//     PrevGlobalRank: {
//         type: DataTypes.STRING
//     },
//     PrevTldRank: {
//         type: DataTypes.STRING
//     },
//     PrevRefSubNets: {
//         type: DataTypes.STRING
//     },
//     PrevRefIPs: {
//         type: DataTypes.STRING
//     },
// },
//     {
//         paranoid: true,
//         freezeTableName: true
//     }
// );
// return contoh
// }

// const db = connection()

// const contoh = model(db)
// dbsync(db)
const stream = fs.createReadStream('./dummy.csv');
let data = []

stream.pipe(parse({ delimiter: "," })).on("data",(row)=>{
    let dum = {"Domain":row[2]}
    // for (let i = 0; i < row.length; i++) {
    //     // console.log(row[i])
    //     dum.GlobalRank = row[i]

    // }
    data.push(dum)
}).on('end',async ()=>{
    // await contoh.bulkCreate(data)
})
// async function tes() {
//   try {
//     await sq.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// tes()
// module.exports = { sq }


// fs.createReadStream("./migration_data.csv")
//     .pipe(parse({ delimiter: ",", from_line: 2 }))
//     .on("data", function (row) {
//     console.log(row);
//     })
//     .on("end", function () {
//     console.log("finished");
//     })
//     .on("error", function (error) {
//     console.log(error.message);
//     });
// [
//   'GlobalRank',     'TldRank',
//   'Domain',         'TLD',
//   'RefSubNets',     'RefIPs',
//   'IDN_Domain',     'IDN_TLD',
//   'PrevGlobalRank', 'PrevTldRank',
//   'PrevRefSubNets', 'PrevRefIPs'
// ]

