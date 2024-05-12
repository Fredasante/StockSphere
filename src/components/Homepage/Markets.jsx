import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const options = {
  method: "GET",
  url: "https://mboum-finance.p.rapidapi.com/v2/markets/tickers",
  params: {
    type: "STOCKS",
    page: "1",
    limit: "20", // Adjust the limit as needed for pagination
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "mboum-finance.p.rapidapi.com",
  },
};

const Markets = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMarkets = async () => {
    setLoading(true);
    try {
      const { data } = await axios.request(options);
      setMarkets(data.body);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching markets:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarkets();
  }, []);

  const handleSearch = () => {
    return markets.filter(
      (market) =>
        market.name.toLowerCase().includes(search.toLowerCase()) ||
        market.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredMarkets = handleSearch();

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const paginatedMarkets = paginate(filteredMarkets, 20, currentPage);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <section className="mt-8 overflow-x-auto">
          <h1 className="text-xl font-bold mb-6 mt-2 text-center">
            MARKET TICKERS
          </h1>

          <Input
            placeholder="Search For A Market Ticker..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="mb-6"
          />
          <Table
            variant="unstyled"
            size="sm"
            className="border border-slate-600 "
          >
            <Thead className="text-gray-200 p-5">
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Symbol</Th>
                <Th>Last Sale</Th>
                <Th>Net Change</Th>
                <Th>% Change</Th>
                <Th>Market Cap</Th>
              </Tr>
            </Thead>
            <Tbody className="">
              {paginatedMarkets.map(
                (
                  { symbol, name, lastsale, netchange, pctchange, marketCap },
                  index
                ) => (
                  <Tr key={symbol} className="border border-slate-700">
                    <Td>{index + 1}</Td>
                    <Td>{name}</Td>
                    <Td>{symbol}</Td>
                    <Td>{lastsale}</Td>
                    <Td
                      style={{
                        color: parseFloat(netchange) > 0 ? "green" : "red",
                      }}
                    >
                      {netchange}{" "}
                      {parseFloat(netchange) > 0 ? (
                        <FaCaretUp style={{ color: "green" }} />
                      ) : parseFloat(netchange) < 0 ? (
                        <FaCaretDown style={{ color: "red" }} />
                      ) : null}
                    </Td>
                    <Td
                      className=""
                      style={{
                        color: parseFloat(pctchange) > 0 ? "green" : "red",
                      }}
                    >
                      {pctchange}{" "}
                      {parseFloat(pctchange) > 0 ? (
                        <FaCaretUp style={{ color: "green" }} />
                      ) : parseFloat(pctchange) < 0 ? (
                        <FaCaretDown style={{ color: "red" }} />
                      ) : null}
                    </Td>
                    <Td>$ &nbsp;{marketCap}</Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>

          <div className="mt-7">
            <div className="flex items-center justify-center">
              <Button
                colorScheme="blue"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                size="sm"
              >
                Previous
              </Button>
              <span className="align-middle mx-2">{currentPage}</span>
              <Button
                colorScheme="blue"
                onClick={handleNextPage}
                size="sm"
                disabled={paginatedMarkets.length < 20}
              >
                Next
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Markets;
