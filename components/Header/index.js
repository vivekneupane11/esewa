import React, { Component, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex backgroundColor={"#1C252E"} width="100%">
      <Flex maxW={"1170px"} margin="auto" direction={"column"} width="100%">
        <Flex
          pl={4}
          pr={4}
          margin="auto"
          justifyContent="space-between"
          alignItems={"center"}
          height={"70px"}
          width="100%"
        >
          <Flex h={"63px"} w={{ base: "130px", md: "150px", lg: "150px" }}>
            <img
              src="https://esewa.com.np/common/images/esewa_logo.png"
              alt="esewa-logo"
              height={"63px"}
              width={"150px"}
              style={{ objectFit: "contain" }}
            />
          </Flex>
          <Box
            display={{ base: "none", md: "none", lg: "block" }}
            m={6}
            ml={{ base: 10, md: 4, lg: 20 }}
            mr={{ base: 10, md: 15, lg: 10 }}
            w={{ base: "40%", md: "40%", lg: "40%" }}
          >
            <InputGroup
              color={"#fff"}
              backgroundColor={"#28323C"}
              border="none"
              borderRadius={4}
              pt={0}
              pb={0}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="#8e90a6" />}
              />
              <Input
                fontSize={14}
                variant={"unstyled"}
                p={2}
                pl={9}
                type="tel"
                placeholder="Search services/merchant by tags (e.g. adsl)"
              />
            </InputGroup>
          </Box>
          <Flex gap={2}>
            <InputGroup
              color={"#fff"}
              backgroundColor={"#28323C"}
              border="none"
              borderRadius={4}
              pt={0}
              pb={0}
              display={{ base: "none", md: "none", lg: "block" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<FaUserAlt size={12} color="#60bb46" />}
              />
              <Input
                fontSize={14}
                variant={"unstyled"}
                p={2}
                pl={9}
                type="tel"
                placeholder="eSewa Id"
              />
            </InputGroup>{" "}
            <InputGroup
              color={"#fff"}
              backgroundColor={"#28323C"}
              border="none"
              borderRadius={4}
              display={{ base: "none", md: "none", lg: "block" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<FaLock size={12} color="#60bb46" />}
              />
              <Input
                fontSize={14}
                variant={"unstyled"}
                p={2}
                pl={9}
                type="tel"
                placeholder="Password"
              />
            </InputGroup>
            <Button
              display={{ base: "none", md: "none", lg: "block" }}
              fontSize={12}
              pt={0}
              pb={0}
              pl={6}
              pr={12}
              borderRadius={1}
              _hover={{ backgroundColor: "none" }}
              backgroundColor={"#60bb46"}
              colorScheme="teal"
              variant="solid"
            >
              Login
            </Button>
            <Button
              borderWidth={2}
              fontSize={12}
              color={"#60bb46"}
              borderRadius={1}
              pt={0}
              pb={0}
              pl={10}
              pr={10}
              _hover={{ backgroundColor: "#60bb46", color: "#fff" }}
              borderColor={"#60bb46"}
              colorScheme="teal"
              variant="outline"
            >
              Register
            </Button>
          </Flex>
        </Flex>
        <Box
          display={{ sm: "block", md: "block", lg: "none" }}
          mt={1}
          mb={4}
          ml={4}
        >
          <InputGroup
            color={"#fff"}
            backgroundColor={"#28323C"}
            border="none"
            borderRadius={4}
            width={{ base: "98%", md: "98%" }}
            pt={0}
            pb={0}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="#8e90a6" />}
            />
            <Input
              fontSize={14}
              variant={"unstyled"}
              p={2}
              pl={9}
              type="tel"
              width={"90%"}
              placeholder="Search services/merchant by tags (e.g. adsl)"
            />
          </InputGroup>
        </Box>
      </Flex>
    </Flex>
  );
}
