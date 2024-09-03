import express from 'express'
import { userRouter } from './src/modules/user/user.controller.js'


const app= express()

app.use(userRouter)
// app.get("/",(request,response)=>{
//     response.send("Hello World!")
// })

// app.get("/user",(request,response)=>{
//     response.send({
//         name:"joao"
//     })
// })

// app.get("/user/:nome",(request,response)=>{
//     response.send({
//         name:request.params.nome
//     })
// })

// app.delete("/user",(request,response)=>{
//     response.send({
//         message:"deletado com sucesso "
//     })
// })

app.listen(3333)