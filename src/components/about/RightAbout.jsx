import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
export const RightAbout = () => {
    return (
        <>
            <Flex width="50%" flexDirection={"column"} alignItems={"center"} backgroundColor={"#eed"} >
                <Flex>
                    <Image src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'></Image>
                </Flex>
                <Flex>
                    <Text>est illo harum. Impedit voluptatem ratione, ipsam excepturi totam incidunt!
                        Debitis quod sapiente ea,
                        quisquam facere officia. Unde culpa corrupti alias vero a dignissimos consequatur
                        eum impedit molestiae.
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}
