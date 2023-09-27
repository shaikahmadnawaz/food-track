/* eslint-disable react/prop-types */
import {
  Box,
  Text,
  Flex,
  Image,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterLink = ({ href, children }) => {
  return (
    <ChakraLink
      href={href}
      d="block"
      mb=".5rem"
      color="brand.footerGrey"
      _hover={{ color: "brand.orange" }}
    >
      {children}
    </ChakraLink>
  );
};

const Footer = () => {
  return (
    <Box
      pt="3rem"
      pb="2rem"
      mt={{ base: 0, md: "4rem" }}
      backgroundColor="#f8f8f8"
      as="footer"
    >
      <Flex
        pb="3rem"
        mb="2.5rem"
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        gridRowGap="2rem"
        maxW="1200px"
        mx="auto"
        px="1rem"
      >
        <Box flex="1.3" textAlign="center" color="#646874">
          <Box width="75%" mx="auto">
            <ChakraLink href="#!">
              <Image mb="1.5rem" src="./logo-f.png" alt="Logo" />
            </ChakraLink>
          </Box>
        </Box>

        <Box flex="0.7" textAlign="left" color="#646874">
          <Text mb="1.5rem" fontWeight="bold" color="#0E2368">
            Contact Us
          </Text>
          <Stack direction="column" spacing="1rem">
            <Text>
              Lorem Ipsum Pvt Ltd.
              <br />
              5/1, Magalton Road, Phartosh Gate
              <br />
              near YTM Market, XYZ-343434
            </Text>
            <Text>example2020@gmail.com</Text>
            <Text>(904) 443-0343</Text>
          </Stack>
        </Box>

        <Box flex="0.7" textAlign="left" color="#646874">
          <Text mb="1.5rem" fontWeight="bold" color="#0E2368">
            More
          </Text>
          <Stack direction="column" spacing="1rem">
            <FooterLink href="#!">About Us</FooterLink>
            <FooterLink href="#!">Products</FooterLink>
            <FooterLink href="#!">Career</FooterLink>
            <FooterLink href="#!">Contact Us</FooterLink>
          </Stack>
        </Box>

        <Box flex="0.7" textAlign="left" color="#646874">
          <Text mb="1.5rem" fontWeight="bold" color="#0E2368">
            Social Links
          </Text>
          <Stack direction="row" spacing="1rem" align="center">
            <FaFacebook size={20} color="#0E2368" />
            <FaTwitter size={20} color="#0E2368" />
            <FaInstagram size={20} color="#0E2368" />
          </Stack>
          <Text mt="7rem">© 2022 Food Truck Example</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
