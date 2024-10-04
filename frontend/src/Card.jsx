import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({img, amount, checkoutHandler}) => {
  return (
    <VStack>
        <Image src={img} boxSize={"60"} objectFit="cover"/>
        <Text>₹{amount}</Text>
        <Button onClick={()=> checkoutHandler(amount)} >But Now</Button>
    </VStack>
  )
}

export default Card