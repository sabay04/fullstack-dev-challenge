import React from 'react'
import { Box,Text } from '@chakra-ui/react'


type SavingsDisplayProps = {
    totalInvestment: number
}

const SavingsDisplay = ({totalInvestment}: SavingsDisplayProps ) => (
    <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={6}
        py={4}
        bg="blue400"
        borderRadius="lg"
        color="white"
    >
        <Text fontWeight="bold" fontSize="lg" color="blue700">{`Total investment: £${totalInvestment} ${String.fromCodePoint(0x1F4B8)}`}</Text>

    </Box>
)

export default SavingsDisplay
