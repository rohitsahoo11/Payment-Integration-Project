import { instance } from "../server.js"

export const checkout = async(req,res)=>{

    const options = {
        amount: 50000, // amount in the smallest currence unit
        currency: "INR",
    }
    const order = await instance.orders.create(options)
    console.log(order)
    res.status(200).json({
        sucess:true,
    })
}

