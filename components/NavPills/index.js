import { Box, Flex, Link } from '@chakra-ui/react'
import React, { Component } from 'react'

const dataLink = ['Tou Up','Airlines','Internet Bill','Load Fund']

export default function NavPills(){
    return   <Box width={'100%'}backgroundColor={"#60bb46"} pl={2}  >
    <Flex  maxW={'1170px'} margin={'auto'} p={2} justifyContent={{base:'center',md:'flex-start' , lg:'flex-start'}}  >
{
  dataLink.map(e=>      <Link color={'#fff'} mr={4} fontSize={{base:13,lg:14}} fontWeight={'500'} >{e}</Link>
  )
}  
  
    </Flex>
    </Box>
}