import {Router} from 'express'

export const userRouter=Router()
const router=Router()

userRouter.use("/user",router)

router.get("/",(req,res)=>{
    res.send("User List")
})

router.get("/:id",(req,res)=>{
    res.send(`User with id ${req.params.id}`)
})
