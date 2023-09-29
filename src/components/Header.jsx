import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      justify="space-between"
      position="relative"
      paddingBottom={{ base: "2rem", md: "28" }}
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        gap="20"
        paddingTop={{ base: "14", md: "4" }}
        paddingX={10}
        paddingLeft={{ base: "2", sm: "4", md: "8", lg: "24" }}
      >
        <Image
          src="./logo.png"
          marginTop="4"
          width="107px"
          height="83px"
          mt={33}
          alt="Food Track"
          display={{ base: "none", md: "block" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          justifyContent="flex-start"
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          paddingX={{ base: "3", md: "0" }}
        >
          <Heading
            size="2xl"
            as="h1"
            width={{ base: "100%", md: "360px" }}
            color="#0E2368"
            fontSize={{ base: "38px", md: "60px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Discover the{" "}
            <Text as="span" color="#E23744">
              Best{" "}
            </Text>
            Food and Drinks
          </Heading>

          <Text fontSize="lg" mt="1rem" width={{ base: "100%", md: "360px" }}>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <Button
            colorScheme="red"
            borderRadius="34px"
            borderColor="white"
            borderWidth="1px"
            width={{ base: "120px", md: "190px" }}
            height={{ base: "40px", md: "63px" }}
            mt="1rem"
            marginBottom={{ base: "10px" }}
          >
            Explore Now!
          </Button>
        </Box>
      </Box>
      <Box flex="1" position="relative" textAlign="right">
        <Image
          width="100%"
          height={{ base: "auto", md: "804px" }}
          alt="pizza"
          src="./pizza.png"
        />
        <Box position="absolute" top="0" right="0" left="0" zIndex="1">
          <Image
            src="./right-top.png"
            width={{ base: "100%", md: "752px" }}
            height={{ base: "auto", md: "839px" }}
            alt="Vector Blob"
          />
        </Box>
        <Box position="absolute" top="0" right="8" zIndex="2">
          <Button
            width={{ base: "64px", md: "122px" }}
            height={{ base: "27px", md: "42px" }}
            colorScheme="red"
            borderRadius="3xl"
            borderColor="white"
            borderWidth="1px"
            mt={{ base: "1rem", md: "32px" }}
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
            fontSize={{ base: "8px", md: "inherit" }}
          >
            Get In Touch
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
