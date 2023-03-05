import { Box, Flex, Text } from "@chakra-ui/react";

import Header from "../components/Header";
import NavPills from "../components/NavPills";
import HeroSection from "../components/HeroSection";
import ServiceSlider from "../components/ServiceSlider";
const data = [
  {
    title: "Popular Services",
    images: [
      "https://cdn.esewa.com.np//ui/images/logos/merchants/VHDDrjDA86bIhakMlwUsB-logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/kPp8HFAhIeWrbtsb1St6nec%20logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/90KDASIcdHd5Y1s0Jx3cName_Urban.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/ImjPuO1dnO71tEgbdN0bscb.jpg.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/BpllP4ogcdwpWaeqOaGees.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/VHDDrjDA86bIhakMlwUsB-logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/kPp8HFAhIeWrbtsb1St6nec%20logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/ImjPuO1dnO71tEgbdN0bscb.jpg.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/BpllP4ogcdwpWaeqOaGees.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/VHDDrjDA86bIhakMlwUsB-logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/kPp8HFAhIeWrbtsb1St6nec%20logo.jpg",
    ],
  },
  {
    title: "New Services",
    images: [
      "https://cdn.esewa.com.np//ui/images/logos/merchants/MbJv3GbUt8XVpreh6xoRjagdamba%20logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/OHYjwQSIbtPZwnSMZAHxmicrosoft.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/N1jhAHCQtIdXjPPcavafNepal%20Police%20Dhangadi.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/cTE4nfuLWxucQtAbOiU0Task%20Sewa.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Q4QVw9nbiiDO3bcTZt8fviber_image_2023-02-05_16-26-16-029.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/MbJv3GbUt8XVpreh6xoRjagdamba%20logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/OHYjwQSIbtPZwnSMZAHxmicrosoft.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/N1jhAHCQtIdXjPPcavafNepal%20Police%20Dhangadi.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/cTE4nfuLWxucQtAbOiU0Task%20Sewa.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Q4QVw9nbiiDO3bcTZt8fviber_image_2023-02-05_16-26-16-029.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Q4QVw9nbiiDO3bcTZt8fviber_image_2023-02-05_16-26-16-029.jpg",
    ],
  },
  {
    title: "Insurance",
    images: [
      "https://cdn.esewa.com.np//ui/images/logos/merchants/cCFgDgIuAwYewDAA4jxxdarshan.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a28LApwbHMF7xdj3BqoXmetlife272-showcase-logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Ro62n5nzMR2vCm8ewkOvScreenshot%202022-01-09%20103121.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/dSxWmTGX5CLeXX0izBIpFinal.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/0lEhaSD3LOf2Du7vtPgejlife.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/cCFgDgIuAwYewDAA4jxxdarshan.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a28LApwbHMF7xdj3BqoXmetlife272-showcase-logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Ro62n5nzMR2vCm8ewkOvScreenshot%202022-01-09%20103121.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/dSxWmTGX5CLeXX0izBIpFinal.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/0lEhaSD3LOf2Du7vtPgejlife.jpg",
    ],
  },
  {
    title: "Stock Broker Payment",
    images: [
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a5Im47OUFBbmYTkbsANMArun%20Securities.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/45Xef0ZksJiPVs21evZgBroker%20No5%20Logo.%2058.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a5Im47OUFBbmYTkbsANMArun%20Securities.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/45Xef0ZksJiPVs21evZgBroker%20No5%20Logo.%2058.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a5Im47OUFBbmYTkbsANMArun%20Securities.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/45Xef0ZksJiPVs21evZgBroker%20No5%20Logo.%2058.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a5Im47OUFBbmYTkbsANMArun%20Securities.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/45Xef0ZksJiPVs21evZgBroker%20No5%20Logo.%2058.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a5Im47OUFBbmYTkbsANMArun%20Securities.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/45Xef0ZksJiPVs21evZgBroker%20No5%20Logo.%2058.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a5Im47OUFBbmYTkbsANMArun%20Securities.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/45Xef0ZksJiPVs21evZgBroker%20No5%20Logo.%2058.jpg",
    ],
  },
  {
    title: "Antivirus",
    images: [
      "https://cdn.esewa.com.np//ui/images/logos/merchants/cCFgDgIuAwYewDAA4jxxdarshan.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a28LApwbHMF7xdj3BqoXmetlife272-showcase-logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Ro62n5nzMR2vCm8ewkOvScreenshot%202022-01-09%20103121.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/dSxWmTGX5CLeXX0izBIpFinal.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/0lEhaSD3LOf2Du7vtPgejlife.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/cCFgDgIuAwYewDAA4jxxdarshan.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/a28LApwbHMF7xdj3BqoXmetlife272-showcase-logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/Ro62n5nzMR2vCm8ewkOvScreenshot%202022-01-09%20103121.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/dSxWmTGX5CLeXX0izBIpFinal.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/0lEhaSD3LOf2Du7vtPgejlife.jpg",
    ],
  },
  {
    title: "Online Shopping",
    images: [
      "https://cdn.esewa.com.np//ui/images/logos/merchants/VHDDrjDA86bIhakMlwUsB-logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/kPp8HFAhIeWrbtsb1St6nec%20logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/90KDASIcdHd5Y1s0Jx3cName_Urban.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/ImjPuO1dnO71tEgbdN0bscb.jpg.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/BpllP4ogcdwpWaeqOaGees.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/VHDDrjDA86bIhakMlwUsB-logo.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/kPp8HFAhIeWrbtsb1St6nec%20logo.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/90KDASIcdHd5Y1s0Jx3cName_Urban.png",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/ImjPuO1dnO71tEgbdN0bscb.jpg.jpg",
      "https://cdn.esewa.com.np//ui/images/logos/merchants/BpllP4ogcdwpWaeqOaGees.png",
    ],
  },
];
export default function Home() {
  return (
    <Flex direction={"column"} backgroundColor={"#f5f7fd"}>
      <Header />
      <NavPills />
      <Flex direction={"column"} maxWidth={"1170px"} margin="auto" mt="4">
        <HeroSection />
        {data.map((e) => (
          <ServiceSlider title={e.title} images={e.images} />
        ))}
      </Flex>

      {/* Footer  starts here */}

      <Box
        width={"100%"}
        mt={10}
        backgroundColor="#1C252E"
        color={"#8093A2"}
        p={15}
      >
        <Flex maxW={"1170px"} margin="auto" justifyContent={"space-between"}>
          <Text fontSize={"13px"}>2023@All right reserved</Text>
          <Text fontSize={"13px"}>Code with Vivek</Text>
        </Flex>
      </Box>

            {/* Footer  ends here */}

    
    </Flex>
  );
}
