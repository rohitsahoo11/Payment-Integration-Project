import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Card from './Card'
import axios from "axios"

const Home = () => {

    const checkoutHandler = async(amount)=>{
        const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

        const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
        })

        //console.log(data)
        const options = {
            key,
            amount: order.amount ,
            currency: "INR",
            name: "Rohit",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/77395879?s=400&u=de290eef0fe92dee577c09bc5ee089d586e21449&v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentVerify",
            prefill: {
                name: "Rohit",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    
    }


  return (
    <Box>
        <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={['column','row']}>
            <Card amount={5000} img={"https://www.bigcmobiles.com/media/catalog/product/cache/6f935541fc7266f00577560114fa3a98/s/t/starlight_1.jpg"} checkoutHandler={checkoutHandler}/>
            <Card amount={5000} img={"https://www.godigit.com/content/dam/godigit/directportal/en/realme-mobiles.jpg"} checkoutHandler={checkoutHandler}/>

        </Stack>
    </Box>
  )
}

export default Home