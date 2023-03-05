import { ChevronRightIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";


const Categories = ['TopUps & Recharge','Electricity & Water','TV Payment','Bus Tickets and Travels','Educational Payment','Insurance Payment','Financial service','Movies Entertainment']

export default function HeroSection(){
    return (
        <Flex gap={4} mb={4}>
        <Flex
          display={{ base: "none", md: "none", lg: "none",xl:'block' }}
          direction={"column"}
          pt={2}
          pb={2}
          borderRadius="4"
          boxShadow="0 4px 8px rgb(98 110 239 / 8%)"
          backgroundColor="#fff"
          min-width="250px"
        >
        {
          Categories.map(e=>    <Flex
            pl={1}
            pr={2}
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#60bb46",
              backgroundColor: "#f4f4f4",
            }}
            gap={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              _hover={{ textDecoration: "none" }}
              fontSize={12}
              fontWeight="600"
              p={3}
            >
            {e}
            </Link>
            <ChevronRightIcon fontSize={16} fontWeight="bold" />
          </Flex>)
        }
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems="center"
          pl={{base:2,md:2,lg:0,xl:2}}
          pr={{base:2,md:2,lg:0,xl:2}}
            width={{base:'100%',md:'100%',lg:'100%',xl:'inherit'}}
            boxShadow="0 4px 8px rgb(98 110 239 / 8%)"
        >
          <img  width={'905px'} height={'305px'}  style={{width:'100%', aspectRatio:'905/305',alignSelf:'stretch',borderRadius:'4px'}} ec-lazy-load="" alt="..." src="https://cdn.esewa.com.np/ui/images/slider/85l89o31sKKLUnV8aQehmovie slider.jpg"></img>
        </Flex>
      </Flex>
    )
}