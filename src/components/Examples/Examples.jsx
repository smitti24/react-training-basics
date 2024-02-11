import React, { useState } from "react";
import { TabButton } from "./TabButton.jsx";
import { EXAMPLES } from "../../../data.js";
import "./Examples.scss";
import Section from "../Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (selectedButton) => {
    setSelectedTab(selectedButton);
  };

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectedTab === "components"}
                onClick={() => handleClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTab === "jsx"}
                onClick={() => handleClick("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTab === "props"}
                onClick={() => handleClick("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTab === "state"}
                onClick={() => handleClick("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {!selectedTab ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab]?.title}</h3>
              <p>{EXAMPLES[selectedTab]?.description}</p>
              <pre>{EXAMPLES[selectedTab]?.code}</pre>
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
}
