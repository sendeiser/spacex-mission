import React from 'react';
import { RxCalendar } from 'react-icons/rx';
import { Box, Text, Spacer, Tag, Flex, Button, Icon, Link } from '@chakra-ui/react';
import dayjs from 'dayjs';
import "dayjs/locale/es";
import { Link as ReachLink } from 'react-router-dom';

const LaunchItem = (launch) => {

    return (
        <>
            <Box
                bg="gray.100"
                p={4}
                m={4}
                borderRadius="lg">

                <Flex >
                    <Text>
                        Mission <strong>{launch.mission_name} </strong>
                        ({launch.launch_year})
                    </Text>
                    <Spacer />
                    <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                        {launch.launch_success ? "Succes" : "Failure"}
                    </Tag>
                </Flex>
                <Flex align="center">
                    <Icon as={RxCalendar} color="gray.500" />
                    <Text
                        fontSize="sm"
                        ml={1}
                        color="gray.500"
                    >
                        {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
                    </Text>
                </Flex>
                <Link as={ReachLink} to={`/launch/${launch.flight_number}`}>
                    <Button
                        mt={2}
                        colorScheme='purple'
                        p={3}
                    >
                        Mas de talles
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default LaunchItem