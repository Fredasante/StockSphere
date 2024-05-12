import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const options = {
  method: "GET",
  url: "https://ms-finance.p.rapidapi.com/market/v2/get-movers",
  headers: {
    "X-RapidAPI-Key": "1ad60057e5msh73016b5e5ef21bdp1f35edjsnec4e47160fd6",
    "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
  },
};

const TopGainers = () => {
  const [gainers, setGainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMarkets = async () => {
    try {
      const response = await axios.request(options);
      setGainers(response.data.gainers.slice(0, 5));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMarkets();
  }, []);

  return (
    <>
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
          <h6 className="text-xl font-bold mb-6 mt-2">TOP GAINERS</h6>

          <Table
            variant="unstyled"
            size="sm"
            className="border border-slate-600 "
          >
            <Thead className="text-gray-200 p-5">
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Last Price</Th>
                <Th>Net Change</Th>
                <Th>% NetChange</Th>
              </Tr>
            </Thead>
            <Tbody className="">
              {gainers.map(
                (
                  {
                    symbol,
                    name,
                    lastPrice,
                    netChange,
                    percentNetChange,
                    ticker,
                  },
                  index
                ) => (
                  <Tr key={symbol} className="border border-slate-700">
                    <Td>{index + 1}</Td>
                    <Td>
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[15px]">{name}</p>
                        <p className="text-sm text-gray-400">{ticker}</p>
                      </div>
                    </Td>
                    <Td>$ &nbsp;{lastPrice}</Td>
                    <Td
                      style={{
                        color: parseFloat(netChange) > 0 ? "green" : "red",
                      }}
                    >
                      {parseFloat(netChange) > 0 ? (
                        <FaCaretUp style={{ color: "green" }} />
                      ) : parseFloat(netChange) < 0 ? (
                        <FaCaretDown style={{ color: "red" }} />
                      ) : null}
                      {netChange.toFixed(2)}{" "}
                    </Td>
                    <Td
                      className=""
                      style={{
                        color:
                          parseFloat(percentNetChange) > 0 ? "green" : "red",
                      }}
                    >
                      {parseFloat(percentNetChange) > 0 ? (
                        <FaCaretUp style={{ color: "green" }} />
                      ) : parseFloat(percentNetChange) < 0 ? (
                        <FaCaretDown style={{ color: "red" }} />
                      ) : null}
                      {percentNetChange.toFixed(2)}{" "}
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default TopGainers;
