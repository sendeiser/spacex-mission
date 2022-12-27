import React from 'react'
import { useState, useEffect } from 'react';
import { Heading, Box } from '@chakra-ui/react'
import * as API from '../services/launches'
import LaunchItem from './LaunchItem';

const LaunchList = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log);
    }, [])


    return (
        <>
            <Heading
                as="h1"
                size="lg"
                pt={3}
                pb={1}
                align="center"
                bgGradient="radial(purple.700, blue.700,purple.500)"
                color="whitesmoke"
            >
                SpaceX Launches
            </Heading>
            {launches.length === 0
                ? <div>Cargando...</div>
                : (
                    <Box
                        display="grid"
                        gridAutoFlow="row dense"
                        gridTemplateColumns='repeat(auto-fill,minmax(340px,1fr));'
                        bgGradient="radial(purple.700, blue.700,purple.500)"
                    >
                        {
                            launches.map((launch) => (

                                <LaunchItem key={launch.flight_number} {...launch} />

                            ))
                        }
                    </Box>
                )
            }

        </>
    )
}

export default LaunchList