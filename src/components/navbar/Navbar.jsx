import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
export const Navbar = () => {
    return (
        <Flex padding={"15px 0px"} justifyContent={"space-around"} backgroundColor={"black"} color={"white"}>
            <Flex>
                <Link href="">Logo</Link>
            </Flex>
            <Flex gap={"20px"}>
                <Link href="">Experience</Link>
                <Link href="">Tools</Link>
                <Link href="">Project</Link>
                <Link href="">About</Link>
            </Flex>
        </Flex>

    )
}
