import React from 'react'
import { Text,Box } from '@chakra-ui/react';


export const FooterApp = () => {
  return (
    <>
        <Box
        display="flex"
        justifyContent="center"
        p={3}
        bgGradient="radial(purple.700, blue.700,purple.500)"

        >
            <Text
              color="whiteAlpha.900"
              align="center"
              as="i"
            >
                Creado por Martin Gonzalez como Practica de Consumo de API
            </Text>
        </Box>
    </>
  )
}
