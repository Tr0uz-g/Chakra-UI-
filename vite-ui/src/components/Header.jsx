import React from 'react'
import {  Box, Button, Heading, Stack } from "@chakra-ui/react"

export default function Header() {
  return (
      <Box
        backgroundImage = 'url(img/pexels-andreas-schnabl-19452718.jpg)'
        backgroundSize='80%'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        width='100%'
        height={{ base: '300px', md: '500px', lg: '360px' }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        marginTop={{ base: '8px', md: '30px' }}
        >
            <Box
            width={{ base: '70%', md: '50%', lg: '50' }}  // Ancho del contenedor según el tamaño de la pantalla
            margin='auto'  // Centrar el contenedor en la pantalla
            padding={{ base: '4', md: '8', lg: '12' }}  // Relleno del contenedor según el tamaño de la pantalla
            boxShadow='md'
            >
                <Heading 
                as='h1'
                color='Window'
                >TRAVEL WITH US
                </Heading>
                <Stack spacing={10} direction='row'>
                    <Button 
                    colorScheme='teal'
                    >View Details
                    </Button>
                        <Button
                        >Watch Video
                        </Button>
                </Stack>
                
            </Box>
        </Box>
       
  )
}
