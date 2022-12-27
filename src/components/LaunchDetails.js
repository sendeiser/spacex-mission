import React from 'react'
import { Link, useParams } from 'react-router-dom'
import * as API from '../services/launches';
import { useState, useEffect } from 'react';
import { Box, Flex, Text, Spacer, Tag } from '@chakra-ui/react';

const LaunchDetails = () => {

    const [launch, setLaunch] = useState({});


    const { launchId } = useParams();
    useEffect(() => {

        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log)

    }, [launchId])

    return (
        <>
            {launch.length === 0
                ? <div>Cargando...</div>
                : (
                    <Box
                        bg="gray.100"
                        p={4}
                        m={4}
                        borderRadius="lg"
                    >

                        <Flex >
                            <Text fontSize="2xl">
                                Mission <strong>{launch.mission_name} </strong>
                                ({launch.launch_year})
                            </Text>
                            <Spacer />
                            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                                {launch.launch_success ? "Succes" : "Failure"}
                            </Tag>
                        </Flex>
                        <Flex>
                            Rocket: <Link to={`/rockets/${launch.rocket?.rocket_id}`}> 
                                {launch.rocket?.rocket_name}
                            </Link>
                        </Flex>
                    </Box>
                )}
        </>
    )
}

export default LaunchDetails