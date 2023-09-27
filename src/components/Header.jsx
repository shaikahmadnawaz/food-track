import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        paddingLeft={{ base: "2", sm: "4", md: "8", lg: "24" }}
        position="relative"
        paddingBottom={28}
      >
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          gap="20"
          mb={{ base: "2rem", md: 0 }}
          paddingTop="2"
        >
          <Image
            src="./logo.png"
            marginTop="4"
            width="107px"
            height="83px"
            mt={33}
            alt="Food Track"
          />
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Heading
              size="2xl"
              as="h1"
              width="360px"
              color="#0E2368"
              fontSize="60px"
            >
              Discover the{" "}
              <Text as="span" color="#E23744">
                Best{" "}
              </Text>
              Food and Drinks
            </Heading>

            <Text fontSize="lg" mt="1rem" width="360px">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button
              colorScheme="red"
              borderRadius="34px"
              borderColor="white"
              borderWidth="1px"
              width={190}
              height={63}
              mt="1rem"
            >
              Explore Now!
            </Button>
          </Box>
        </Box>
        <Box flex="1" position="relative" textAlign="right">
          <Image width={734} height={804} alt="pizza" src="./pizza.png" />
          <Box position="absolute" top="0" right="0" zIndex="1">
            <Image
              src="./right-top.png"
              width={752}
              height={839}
              alt="Vector Blob"
            />
          </Box>
          <Box position="absolute" top="0" right="8" zIndex="2">
            <Button
              width={122}
              height={42}
              colorScheme="red"
              borderRadius="3xl"
              borderColor="white"
              borderWidth="1px"
              mt="32px"
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
