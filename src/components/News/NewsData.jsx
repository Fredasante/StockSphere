import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Divider,
  ButtonGroup,
  Button,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const URL = "https://real-time-finance-data.p.rapidapi.com/stock-news";

const options = {
  method: "GET",
  params: {
    symbol: "AAPL:NASDAQ",
    language: "en",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  },
};

const NewsData = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    const { data } = await axios.get(URL, options);
    setNews(data.data.news);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <h1 className="mt-10 mb-5 font-bold text-lg">EXPLORE LATEST NEWS</h1>

      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  bg-slate-700 p-5 lg:p-7 rounded-lg">
          {news.map(
            ({
              article_title,
              article_url,
              article_photo_url,
              post_time_utc,
              source,
            }) => (
              <Link key={article_url} to={article_url} target="_blank">
                <Card maxW="sm">
                  <CardBody className="bg-[rgb(16,23,42)] text-gray-200">
                    <Image
                      src={article_photo_url}
                      alt="team member image"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="sm">{article_title}</Heading>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter className="bg-[rgb(16,23,42)] text-gray-200">
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        {source}
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        {post_time_utc}
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Link>
            )
          )}
        </section>
      )}
    </>
  );
};

export default NewsData;
