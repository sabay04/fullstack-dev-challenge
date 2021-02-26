import React from 'react'
import { Box,Text, Heading } from '@chakra-ui/react'


type SavingsDisplayProps = {
    totalInvestment: number
}

const SavingsDisplay = ({totalInvestment}: SavingsDisplayProps ) => { 
    
    const currencyFormat = (total: number) => {
        return '£' + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      
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
        mb={4}
    >
         <Heading as="h4" size="md" fontWeight="bold" fontSize="lg" color="pink.500">{`Total Investment:`}</Heading>    
        <Text fontWeight="bold" fontSize="lg" color="pink.500">{`${total} ${String.fromCodePoint(0x1F4B8)}`}</Text>
    </Box>
)}

export default SavingsDisplay
