import React from 'react'
import { Flex, Text, Image, Input, Button, Textarea } from '@chakra-ui/react'
import { LuUploadCloud } from "react-icons/lu";

export const RightContact = () => {

    return (
        <>
            <Flex width="30%" flexDirection={"column"}>
                <Flex>
                    <Text>Let's Talk</Text>
                </Flex>
                <Flex width="100%" flexDirection={"column"} gap={"20px"}>
                    <Input type='text' placeholder='Name'></Input>
                    <Input type='email' placeholder='Email'></Input>
                    <Input type='text' placeholder='Phone'></Input>
                    <Textarea placeholder='Message'></Textarea>
                    <Flex>
                        <Flex>
                            <Input type='file' display={"none"}></Input>
                            <Button variant={""}>
                                <LuUploadCloud />
                                Upload File
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex >
        </>
    )
}
