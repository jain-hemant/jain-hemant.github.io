import { Box } from '@chakra-ui/react'
import React from 'react'
import {SocialFooter} from './SocialFooter'
import { DevInfoFooter } from './DevInfoFooter'
export const Footer = () => {
  return (
    <Box >
        <SocialFooter />
        <DevInfoFooter /> 
    </Box>
  )
}
