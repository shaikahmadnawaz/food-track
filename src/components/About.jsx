import { Box, Text, Image, Heading, Flex, Button } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      mb={["3rem", "5rem", "7rem", "10rem"]}
      as="section"
      bgGradient="linear(to-r, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
      paddingX="12"
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Box>
          <Image width={384} height={468} src="about.png" />
        </Box>
        <Box flexBasis="40%">
          <Heading mb="1.5rem" size="xl" as="h2" color="#0E2368">
            About Us
          </Heading>
          <Text
            maxWidth={{ base: "auto", md: "430px" }}
            color="brand.greyText"
            mb="1rem"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </Text>
          <Button
            mt="1.5rem"
            py="1rem"
            bgColor="red"
            color="white"
            borderRadius="34px"
          >
            Read more
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
