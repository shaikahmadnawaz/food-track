import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  Grid,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const TrendingCards = (props) => {
  const { picture, title, summary } = props;
  return (
    <Box flex="1" border="1px solid #E2E8F0" borderRadius="lg" p="1rem">
      <Box position="relative">
        <Image
          borderTopRightRadius="10px"
          borderTopLeftRadius="10px"
          src={picture}
          maxH="14rem"
          width="100%"
          objectFit="cover"
        />
      </Box>
      <Text
        fontWeight="bold"
        mt="1rem"
        fontSize="21px"
        color="#0E2368"
        lineHeight="shorter"
      >
        {title}
      </Text>
      <Text fontSize="sm" mt="13px" lineHeight="27px" color="#444957">
        {summary}
      </Text>
      <Button
        fontWeight="semibold"
        color="#424961"
        mt="27px"
        width={131}
        height={42}
        display="inline-block"
        borderRadius="3xl"
        borderColor="#424961"
        borderWidth="1px"
      >
        Read more
      </Button>
    </Box>
  );
};

const Articles = () => {
  const articles = [
    {
      picture: "./grilled-tomatoes.png",
      title: "Grilled Tomatoes at Home",
      summary:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      picture: "./meal-prep.png",
      title: "Snacks for Travel",
      summary:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      picture: "./meal-prep-1.png",
      title: "Post-workout Recipes",
      summary:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      picture: "./grilled-tomatoes-1.png",
      title: "How To Grill Corn",
      summary:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      picture: "./meal-prep-ideas.png",
      title: "Crunchwrap Supreme",
      summary:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      picture: "./meal-prep-ideas-1.png",
      title: "Broccoli Cheese Soup",
      summary:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  const articlesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPageCount = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box mb={["5rem", "7rem", "8rem", "10rem"]} as="section" mt="0">
      <Box maxW="1200px" mx="auto" paddingTop="0">
        <Flex justify="space-between" align="center" mb="2.4rem">
          <Heading fontSize={["2xl", "3xl"]} color="#0E2368">
            Latest Articles
          </Heading>
        </Flex>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          }}
          gridTemplateRows={{
            lg: "1fr",
            md: "1fr 1fr",
            base: "repeat(3, 1fr)",
          }}
          gridColumnGap="1.5rem"
          gridRowGap="1.5rem"
          justify="space-between"
        >
          {currentArticles.map((article, index) => (
            <TrendingCards
              key={index}
              picture={article.picture}
              title={article.title}
              summary={article.summary}
            />
          ))}
        </Grid>
        <Flex justifyContent="center" mt="2rem">
          <Button
            width={4}
            height={7}
            borderColor="black"
            borderWidth="1px"
            borderRadius="5px"
            size="sm"
            mx="0.2rem"
            onClick={() => paginate(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            <ChevronLeftIcon />
          </Button>
          <Text mx="0.5rem">
            {currentPage}/{totalPageCount}
          </Text>
          <Button
            width={4}
            height={7}
            borderColor="black"
            borderWidth="1px"
            borderRadius="5px"
            size="sm"
            mx="0.2rem"
            onClick={() => paginate(currentPage + 1)}
            isDisabled={currentPage === totalPageCount}
          >
            <ChevronRightIcon />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Articles;
