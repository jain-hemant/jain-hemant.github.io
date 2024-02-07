import React from 'react'
import { Flex } from '@chakra-ui/react'
import { LeftAbout } from './LeftAbout'
import { RightAbout } from './RightAbout'
export const About = () => {
    return (
        <>
            <Flex justifyContent={"space-around"}>
                <LeftAbout />
                <RightAbout />
            </Flex>
        </>
    )
}
