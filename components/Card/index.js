import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { Component } from 'react'


export default function Card({imgUrl}){
    return      <Flex
    direction={"column"}
    justifyContent="center"
    alignItems={"center"}
    borderRadius={"2"}
    borderWidth={"1px"}
    width={"200px"}
  >
    <Flex backgroundColor="#f5f7fd" width={"100%"}>
      <Image
        pt={4}
        pb={4}
        margin="auto"
        width={"60px"}
        minH={'90px'}
        src={imgUrl}
        alt=""
      />
    </Flex>

    <Box pt="4">
      <Text fontWeight={"bold"} fontSize="12">
        Dhuwani Sewa
      </Text>
      <Text
        fontWeight={"bold"}
        color="#60bb46"
        fontSize="12"
        pt={8}
        pb="5"
      >
        View Details
      </Text>
    </Box>
  </Flex>
}