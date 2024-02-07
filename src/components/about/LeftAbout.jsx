import React from 'react'
import { Text, Flex, Button, Link, Image } from '@chakra-ui/react'
export const LeftAbout = () => {
    return (
        <>
            <Flex width="50%" flexDirection={"column"} gap={"20px"} alignItems={"center"} backgroundColor={"#eee"}>
                <Flex>
                    <Text>Hey, This is</Text>
                    <Text>Hemant Jain</Text>
                </Flex>
                <Flex>
                    <Text>an interactive Web Developer</Text>
                </Flex>
                <Flex>
                    <Button>Let's Talk -</Button>
                </Flex>
                <Flex>
                    <Image src="" />
                    <Link href=''>www.jain-hemant.github.io</Link>
                </Flex>
            </Flex>

        </>
    )
}
