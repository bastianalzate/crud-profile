const express = require("express");
const connection = require("./db");
const cors = require("cors")
require("dotenv").config()


const app = express()

// middelware
app.use(express.json())
app.use(cors())


// Validar conexion DB
connection.connect((err) => {
    if(err) throw err
    else console.log("Conectado a la DB")
})

//rutas
app.get("/getProfiles", async (req, res) => {
    const sql = 'SELECT * FROM profiles';
    
    const result = await connection.query(sql, (err, result) => {
        if(err) throw err
        else {
            res.json(result)
            return result
        }
    })

    return result
})

app.post("/createProfile", (req, res) => {
    const sql = 'INSERT INTO profiles SET ?'

    connection.query(sql, req.body, err => {
        if(err) throw err
        else res.send("Creado correctamente")
    })
})

app.put("/updateProfile", (req, res) => {
    const {id, name, lastname, burden, linkedin, github} = req.body;

    const sql = `UPDATE profiles SET name="${name}", lastname="${lastname}", burden="${burden}", linkedin="${linkedin}", github="${github}" WHERE id="${id}"`

    connection.query(sql, (err) => {
        if(err) throw err
        else res.send("actualizado correctamente")
    })

})

app.delete("/deleteProfile", (req, res) => {
    const { id } = req.query
    const sql = `DELETE FROM profiles WHERE id=${id}`;

    connection.query(sql, (err) => {
        if(err) throw err
        else res.send("eliminado correctamente")
    })
    
    
})


app.listen(process.env.PORT, console.log(`Escuchando en el puerto ${process.env.PORT}`))
