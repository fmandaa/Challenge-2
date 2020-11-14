const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// endpoint "/bmi" pake method POST
app.post("/bmi", (req,res) => {

    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / ( tinggi * tinggi )
    var status = status 
    if (bmi < 18.5) {
      status = ("Kekurangan berat badan")
    } else if (bmi < 25) {
      status = ("Normal (ideal)")
    } else if (bmi < 30 ) {
      status = ("Kelebihan berat badan")
    } else {
      status = ("Kegemukan (Obesitas)")
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status,
        }

    res.json(response)
})

app.listen(2910, () => {
    console.log("Server run on port 2910");
})