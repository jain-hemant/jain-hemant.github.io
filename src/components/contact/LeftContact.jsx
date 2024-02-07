import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
export const LeftContact = () => {
    return (
        <Flex width={"50%"}>
            <Flex flexDirection={"column"} borderRadius={"50%"} backgroundColor={"red"}>
                <Flex>
                    <Image width={"200px"} height={"200px"}
                        src='https://imgs.search.brave.com/3OUoafkscpCHl8zyfqS50fFEQfLWsVQJ_-FM_IKnizY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y2L2Mw/L2Q4L2Y2YzBkODkz/ODAyMzY2MzUzMDQx/ZGVhYWMxYTNlODBk/LmpwZw' />
                </Flex>
                <Flex flexDirection={"column"}>
                    <Text fontSize={"20px"} color={"white"} fontWeight={"bolder"}>got a project?</Text>
                    <Text>Conscientious, team-oriented, working tirelessly</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
