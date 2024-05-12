import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const options = {
  method: "GET",
  url: "https://devapi-finance.p.rapidapi.com/v2/markets/news",
  params: {
    ticker: "AAPL",
    type: "ALL",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "devapi-finance.p.rapidapi.com",
  },
};

const HomeNews = () => {
  const [currentNews, setCurrentNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const { data } = await axios.request(options);
      setCurrentNews(data.body.slice(0, 6));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center mt-10">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <section className="bg-slate-700 p-6 rounded-lg mt-6 md:mt-10 lg:mt-24 mb-6 md:mb-10">
          <h2 className="text-2xl font-bold mb-3 lg:mb-7">LATEST NEWS</h2>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentNews.map(({ url, img, title, text, source, time, ago }) => (
              <Link to={url} key={url} target="_blank">
                <Card maxW="sm">
                  <CardBody className="bg-[rgb(16,23,42)] text-gray-200">
                    <Image src={img} alt="Image of post" borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                      <Heading size="sm">{title}</Heading>
                      <Text color="blue.600" fontSize="l">
                        {time}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter className="bg-[rgb(16,23,42)] text-gray-200">
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        {source}
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HomeNews;
