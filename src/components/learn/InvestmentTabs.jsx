import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import React from "react";
import StocksBasics from "./StocksBasics";
import InvestmentRisk from "./InvestmentRisk";
import DividendStocks from "./DividendStocks";
import EconomicIndicators from "./EconomicIndicators";
import InvestingApproaches from "./InvestingApproaches";

const InvestmentTabs = () => {
  return (
    <div className="bg-[#334155] text-gray-200 md:p-5 p-3 rounded-md">
      <Tabs variant="unstyled" className="overflow-scroll lg:overflow-hidden">
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "teal.500", borderRadius: "6px" }}
          >
            Stock market Basics
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "teal.500", borderRadius: "6px" }}
          >
            Investment Risk
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "teal.500", borderRadius: "6px" }}
          >
            Dividend Paying Stocks
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "teal.500", borderRadius: "6px" }}
          >
            Economic Indicators
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "teal.500", borderRadius: "6px" }}
          >
            Long vs Short Term Investments
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StocksBasics />
          </TabPanel>
          <TabPanel>
            <InvestmentRisk />
          </TabPanel>
          <TabPanel>
            <DividendStocks />
          </TabPanel>
          <TabPanel>
            <EconomicIndicators />
          </TabPanel>
          <TabPanel>
            <InvestingApproaches />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default InvestmentTabs;
