import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";

const options = {
  method: "GET",
  url: "https://seeking-alpha.p.rapidapi.com/market/get-equity",
  params: {
    filterCategory: "global-equity",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
  },
};

const MarketSummary = () => {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSummary = async () => {
    try {
      const { data } = await axios.request(options);
      setSummary(data.data);
      setLoading(false);

      console.log(summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <section>
          <h2 className="text-xl font-bold mb-5 mt-2 lg:mt-10">
            Welcome To Global Equity Markets
          </h2>
          <p className="mb-5">
            Welcome to our platform dedicated to providing you with insights
            into global equity markets. Our data and analysis aim to help you
            make informed decisions in the dynamic world of equities.
          </p>
          <Table
            variant="unstyled"
            size="sm"
            className="border border-slate-600 "
          >
            <Thead className="text-gray-200 p-5">
              <Tr>
                <Th>Name</Th>
                <Th>Company</Th>
                <Th>Alias Name</Th>
                <Th>Position</Th>
              </Tr>
            </Thead>
            <Tbody className="">
              {summary.map((item) => (
                <Tr
                  key={item.attributes.slug}
                  className="border border-slate-700"
                >
                  <Td>{item.attributes.name}</Td>
                  <Td>{item.attributes.company}</Td>
                  <Td>{item.attributes.alias_name}</Td>
                  <Td>{item.attributes.position}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      )}
    </>
  );
};

export default MarketSummary;
