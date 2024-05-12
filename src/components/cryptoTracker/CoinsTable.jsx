import { useEffect, useState } from "react";
import axios from "axios";
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

const PAGE_SIZE = 20;

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: PAGE_SIZE,
          offset: (currentPage - 1) * PAGE_SIZE,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      setCoins(response.data.data.coins);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <section>
      <h1 className="text-xl text-center font-bold mb-6 mt-6">
        CRYPTOCURRENCIES BY MARKET CAPITALIZATION
      </h1>

      <Input
        placeholder="Search For A CryptoCurrency..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <Table
            variant="unstyled"
            size="sm"
            className="border border-slate-600 "
          >
            <Thead className="text-gray-200 p-5">
              <Tr>
                <Th>RANK</Th>
                <Th>All Coins</Th>
                <Th>% Change</Th>
                <Th>Market Cap</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {coins &&
                handleSearch().map(
                  ({
                    symbol,
                    name,
                    change,
                    iconUrl,
                    marketCap,
                    price,
                    rank,
                  }) => (
                    <Tr key={symbol} className="border border-slate-700">
                      <Td>{rank}</Td>
                      <Td>
                        <div className="flex items-center gap-2">
                          <img src={iconUrl} className="w-7 h-7" alt={name} />
                          <div>
                            <p className="font-semibold">{name}</p>
                            <p className="text-gray-400 mt-1">{symbol}</p>
                          </div>
                        </div>
                      </Td>
                      <Td
                        style={{
                          color: parseFloat(change) > 0 ? "green" : "red",
                        }}
                      >
                        {change}{" "}
                        {parseFloat(change) > 0 ? (
                          <FaCaretUp style={{ color: "green" }} />
                        ) : parseFloat(change) < 0 ? (
                          <FaCaretDown style={{ color: "red" }} />
                        ) : null}
                      </Td>
                      <Td>
                        $&nbsp;
                        {typeof marketCap === "string"
                          ? parseFloat(marketCap).toLocaleString()
                          : marketCap}
                      </Td>
                      <Td>
                        $&nbsp;
                        {typeof price === "string"
                          ? parseFloat(price).toFixed(2)
                          : price}
                      </Td>
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
                disabled={coins.length < PAGE_SIZE}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoinsTable;
