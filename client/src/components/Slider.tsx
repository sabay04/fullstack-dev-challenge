import React from 'react'
import {
    Slider as ChakraSlider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderProps,
    Text,
    Box,
} from '@chakra-ui/react'

type Props = SliderProps & {
    label?: string
    value: number 
}

const Slider = ({ label, value, ...rest }: Props) => (
    <Box width="100%">
        {!!label && <Text mb={2} fontWeight="semibold" color="blue700" align="left">{`${label} : ${value}`}</Text>}
        <ChakraSlider {...rest} colorScheme="primary">
            <SliderTrack bg="gray.300">
                <SliderFilledTrack bg="primary" />
            </SliderTrack>
            <SliderThumb />
        </ChakraSlider>
    </Box>
)

export default Slider
