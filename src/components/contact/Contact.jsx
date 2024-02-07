import React from 'react'
import { Flex } from '@chakra-ui/react'
import { LeftContact } from './LeftContact'
import { RightContact } from './RightContact'

export const Contact = () => {
    return (
        <>
            <Flex backgroundColor="black" color={"white"} >
                <LeftContact />
                <RightContact />
            </Flex>
        </>
    )
}
