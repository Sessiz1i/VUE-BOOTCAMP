const app = require("express")()

app.get("/",(req,res)=>{
    res.status(200).send({
        message:"Rest API Ayakta..."
    })
})

app.listen(3232,()=>{
    console.log(`http://localhost:3232 Üzerinden çalışıyor..`)
})

