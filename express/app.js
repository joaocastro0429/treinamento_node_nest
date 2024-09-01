const express = require('express')



const app= express()


app.get("/",(request,response)=>{
    response.send("Hello World!")
})

app.get("/user",(request,response)=>{
    response.send({
        name:"joao"
    })
})

app.delete("/user",(request,response)=>{
    response.send({
        message:"deletado com sucesso "
    })
})

app.listen(3333)