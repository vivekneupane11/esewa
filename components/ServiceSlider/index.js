import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";
import Card from "../Card";
export default function ServiceSlider({title,images}) {
  return (
    <Flex flexDir={"column"}>
      <Flex
        pl={{ base: 2, md: 2, lg: 0 }}
        pr={{ base: 2, md: 2, lg: 0 }}
        pt={7}
        pb={5}
        justifyContent="space-between"
        width={"100%"}
      >
        <Text fontWeight={"bold"}>{title}</Text>
        <Button p={4} backgroundColor={"#e0f2db"} color="#60bb46" size="xs">
          View More
        </Button>
      </Flex>
      <Flex
        maxW={"96vw"}
        margin={{base:'auto',md:'auto',lg:0}}
        backgroundColor="#fff"
        pt="4"
        pb={"4"}
        borderRadius={2}
        pr={4}
        pl={1}

      >
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}

          className="container"
          slidesPerView={"auto"}
          spaceBetween={5}
            loop={true}
          navigation
          pagination={{
            clickable: true,
          }}
         breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            "@2.50": {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          // className="mySwiper"
        >
        {
          images.map(imgUrl=><SwiperSlide>
  <Card imgUrl={imgUrl} />
</SwiperSlide>
          )
        }
        </Swiper>
      </Flex>
    </Flex>
  );
}
