import React from 'react'
import { Input as ChakraInput, InputProps, Text, Box } from '@chakra-ui/react'
import theme from '../theme'

type Props = InputProps & {
    label?: string
}

const Input = ({ label, ...rest }: Props) => (
    <Box width="100%">
        {!!label && <Text mb={2} fontWeight="semibold" color="blue700" align="left">{label}</Text>}
        <ChakraInput borderColor="gray.300" focusBorderColor="pink.400" errorBorderColor={theme.colors.danger} {...rest} />
    </Box>
)

export default Input
