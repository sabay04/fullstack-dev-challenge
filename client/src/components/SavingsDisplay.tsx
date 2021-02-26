import React from 'react'
import { Box,Text, Heading } from '@chakra-ui/react'


type SavingsDisplayProps = {
    totalInvestment: number
    emoji: string
    title: string 
}

const SavingsDisplay = ({totalInvestment, emoji, title}: SavingsDisplayProps ) => { 
    
    const currencyFormat = (total: number) => {
        return '£' + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      const emojiHex = Number(emoji)
      
    const total = currencyFormat(totalInvestment)
    return (
    <Box
        display="block"
        flexDirection="row"
        justifyContent="space-between"
        textAlign="center"
        px={6}
        py={4}
        bg="blue400"
        borderRadius="lg"
        color="white"
        boxShadow="xl"
        mx={2}
        mb={1}
    >
         <Heading as="h4" size="md" fontWeight="bold" fontSize="lg" color="pink.500">{`${title}:`}</Heading>    
        <Text fontWeight="bold" fontSize="lg" color="pink.500">{`${total} ${String.fromCodePoint(emojiHex)}`}</Text>
    </Box>
)}

export default SavingsDisplay
