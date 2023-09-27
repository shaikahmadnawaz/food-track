import { Flex, Image, Button, Spacer, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p="10px"
      paddingX={{ base: "2", sm: "4", md: "24" }}
      alignItems="center"
    >
      <Image src="./logo.png" alt="Food Track" />
      <Spacer />

      <HStack spacing="20px" mt={{ base: "4", sm: "0" }}>
        <Button
          colorScheme="red"
          borderRadius="3xl"
          borderColor="white"
          borderWidth="1px"
        >
          Get In Touch
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
