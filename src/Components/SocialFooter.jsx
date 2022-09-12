import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import fb  from '../Resource/Img/facebook.png'
import twitter  from '../Resource/Img/twitter.png'
import instagram  from '../Resource/Img/instagram1.png'
import linkedin  from '../Resource/Img/linkedin.png'
import pinterest  from '../Resource/Img/pinterest.png'
export const SocialFooter = () => {
  return (
    <Box h={"300px"} bgColor={"#E9EFECCA"}>
      {/* <Image src={logo} alt='bg' w={"100%"} h="200px" /> */}
      <Flex textAlign="center" w={"50%"} mx={"auto"} mt={"30px"} fontFamily="mono" fontSize="1.1em" fontWeight={"semibold"}>
        We want to stay in touch with you! Please follow us on social media 
        <br />so we can keep in touch.
      </Flex>
      <Flex m={"auto"} width="30%"  mt="30px">
        <Image src={fb} boxSize="50px" m={"auto"}/> 
        <Image src={twitter} boxSize="50px" m={"auto"} />
        <Image src={instagram} boxSize="50px" m={"auto"}/>
        <Image src={linkedin} boxSize="50px" m={"auto"}/>
        <Image src={pinterest} boxSize="50px" m={"auto"}/>

      </Flex>
    </Box>

  )
}
