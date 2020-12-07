const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// endpoint "/kubus" pake method POST
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)
    let v = sisi * sisi * sisi
    let lp = 6 * (sisi * sisi)

    let response = {
        sisi: sisi,
        volume: v,
        luas_permukaan: lp
    }

    res.json(response)
})

//endpoint "/balok" pake method POST
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let v = panjang * lebar * tinggi
    let lp = 2 * ( panjang*lebar + lebar*tinggi + panjang*tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: v,
        luas_permukaan: lp
    }

    res.json(response)
})

//endpoint "/tabung" pake method POST
app.post("/tabung", (req,res) => {
    let r = Number(req.body.r)
    let tinggi = Number(req.body.tinggi)
    let v = 22/7 * r * r * tinggi
    let lp = 2 * 22/7 * r * (r+tinggi)

    let response = {
        jari_jari: r,
        tinggi: tinggi,
        volume: v,
        luas_permukaan: lp
    }

    res.json(response)
})

//endpoint "/kerucut" pake method POST
app.post("/kerucut", (req,res) => {
    let r = Number(req.body.r)
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi)
    let v = 1/3 * 22/7 * r * r * tinggi
    let lp = (22/7 * r * r) + ( 22/7 * r * sisi)

    let response = {
        sisi_miring: sisi,
        jari_jari: r,
        tinggi: tinggi,
        volume: v,
        luas_permukaan: lp
    }

    res.json(response)
})

//endpoint "/bola" pake method POST
app.post("/bola", (req,res) => {
    let r = Number(req.body.r)
    let v = 4/3 * 3.14 * r*r*r
    let lp = 4 * 3.14 * r * r

    let response = {
        jari_jari: r,
        volume: v,
        luas_permukaan: lp
    }

    res.json(response)
})

//endpoint "/convert/celcius/:value" pake method GET
app.get("/convert/celcius/:value", (req,res) => {

    let value = Number(req.params.value)
    let r = 4/5 * value
    let f = 9/5 * value + 32
    let k = value + 273

    let response = {
        celcius: value,
        result: {
        reamur: r,
        fahrenheit: f,
        kelvin: k
        }
    }

    res.json(response)
})

//endpoint "/convert/reamur/:value" pake method GET
app.get("/convert/reamur/:value", (req,res) => {

    let value = Number(req.params.value)
    let c = 5/4 * value
    let f = 9/4 * value + 32
    let k = 5/4 * value + 273

    let response = {
        reamur: value,
        result: {
        celcius: c,
        fahrenheit: f,
        kelvin: k
        }
    }

    res.json(response)
})

//endpoint "/convert/kelvin/:value" pake method GET
app.get("/convert/kelvin/:value", (req,res) => {

    let value = Number(req.params.value)
    let c = value - 273
    let f = 9/5 * ( value - 273 ) + 32
    let r = 4/5 * ( value - 273 )

    let response = {
        kelvin: value,
        result: {
        celcius: c,
        fahrenheit: f,
        reamur: r
        }
    }

    res.json(response)
})

//endpoint "/convert/fahrenheit/:value" pake method GET
app.get("/convert/fahrenheit/:value", (req,res) => {

    let value = Number(req.params.value)
    let c = 5/9 * ( value - 32 )
    let r = 4/9 * ( value - 32 )
    let k = 5/9 * ( value - 32 ) + 273

    let response = {
        fahrenheit: value,
        result: {
        celcius: c,
        reamur: r,
        kelvin: k
        }
    }

    res.json(response)
})

// endpoint "/desimal" pake method POST
app.post("/desimal", (req,res) => {
    let d = Number(req.body.desimal)
    
    //convert ke biner
    let b = parseInt(d,10).toString(2)

    //convert ke octal
    let o= parseInt(d,10).toString(8)

    //convert ke hexadesimal
    let h = parseInt(d,10).toString(16)

    let response = {
        desimal : d,
        result : {
            biner: b,
            octal: o,
            hexadesimal: h
        }
    }

    res.json(response)
})

// endpoint "/biner" pake method POST
app.post("/biner", (req,res) => {
    let b = Number(req.body.biner)
    
    //convert ke desimal
    let d = parseInt(b,2).toString(10)

    //convert ke octal
    let o = parseInt(b,2).toString(8)

    //convert ke hexadesimal
    let h = parseInt(b,2).toString(16)

    let response = {
        biner: b,
        result : {
            desimal: d,
            octal: o,
            hexadesimal: h
        }
    }

    res.json(response)
})

// endpoint "/octal" pake method POST
app.post("/octal", (req,res) => {
    let o = Number(req.body.octal)
    
    //convert ke desimal
    let d = parseInt(o,8).toString(10)

    //convert ke biner
    let b = parseInt(o,8).toString(2)

    //convert ke hexadesimal
    let h = parseInt(o,8).toString(16)

    let response = {
        octal: o,
        result : {
            desimal: d,
            biner: b,
            hexadesimal: h
        }
    }

    res.json(response)
})

// endpoint "/hexa" pake method POST
app.post("/hexa", (req,res) => {
    let h = Number(req.body.hexa)
    
    //convert ke biner
    let b = parseInt(h,16).toString(2)

    //convert ke octal
    let o = parseInt(h,16).toString(8)

    //convert ke desimal
    let d = parseInt(h,16).toString(10)

    let response = {
        hexadesimal: h,
        result : {
            desimal: d,
            octal: o,
            biner: b
        }
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})