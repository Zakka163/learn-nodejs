const express = require('express')

// const math = require('m')
const app = express()
const port = 3000



app.get('/tes', async (req, res) => {
    let data = []
    try {

        // ==== tanpa promise all =====
        let hasil = []
        for (let i = 0; i < 10; i++) {
            let value 
            if (i == 5 || i == 7) {
                value = await new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, i);
                });


            } else {
                value = await new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, i);
                });


            }
            console.log(value);
            hasil.push(value)
        }


        // // ===== dengan promise all =====

        // for (let i = 0; i < 10; i++) {
        //     if (i == 5 || i == 7) {
        //         data.push(new Promise((resolve, reject) => {
        //             setTimeout(resolve, 100, i);
        //         }))


        //     } else {
        //         data.push(new Promise((resolve, reject) => {
        //             setTimeout(resolve, 100, i);
        //         }))


        //     }
        // }
        // let hasil = await Promise.all(data)
        // console.log(hasil);




        // // ===== dengan promise allsettled =====

        // for (let i = 0; i < 10; i++) {
        //     if (i == 5 || i == 7) {
        //         data.push(new Promise((resolve, reject) => {
        //             setTimeout(reject, 100, i);
        //         }))


        //     } else {
        //         data.push(new Promise((resolve, reject) => {
        //             setTimeout(resolve, 100, i);
        //         }))


        //     }
        // }
        // let hasil = []
        // let result = await Promise.allSettled(data)
        // for (let i = 0; i < result.length; i++) {
        //     if (result[i].status == 'rejected') {
        //         console.log('ini gagal =', result[i].reason);
        //     } if(result[i].status == 'fulfilled') {
        //         // console.log('ini berhasil =', result);
        //         hasil.push(result[i].value)
        //     }


        // }



        

        res.json({ "status": `ok`, "data": hasil })

    } catch (error) {
        console.log(error);
        res.json({ "status": `error` })
    }

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

