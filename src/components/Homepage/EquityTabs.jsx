import { TabList, TabPanels, TabPanel, Tabs, Tab } from "@chakra-ui/react";
import React, { useState } from "react";
import { tabContent } from "../../utils/constants";

const EquityTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Tabs variant="unstyled" index={selectedTab} onChange={handleTabChange}>
      <TabList>
        {tabContent.map((tab, index) => (
          <Tab
            key={index}
            _selected={{
              color: "white",
              bg: index === selectedTab && "teal.500",
              borderRadius: "md",
              marginBottom: "10px",
            }}
            onClick={() => handleTabChange(index)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabContent.map((tab, index) => (
          <TabPanel key={index}>
            {tab.content.map((item, itemIndex) => (
              <div key={itemIndex}>
                <h4 className="font-bold text-l">{item.title}</h4>
                <p className="mb-4">{item.description}</p>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default EquityTabs;
