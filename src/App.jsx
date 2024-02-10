import { useState } from "react";
import { CoreConcepts } from "./components/Core-Concepts/CoreConcepts";
import { TabButton } from "./components/Examples/TabButton";
import { Header } from "./components/header/Header";
import { EXAMPLES } from "../data.js";

function App() {
  let text = "React Essentials";
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (selectedButton) => {
    setSelectedTab(selectedButton);
  };

  return (
    <div>
      <Header text={text} />
      <main>
        <section id="core-concepts">
          <CoreConcepts></CoreConcepts>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
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
          </menu>
          {!selectedTab ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab]?.title}</h3>
              <p>{EXAMPLES[selectedTab]?.description}</p>
              <pre>{EXAMPLES[selectedTab]?.code}</pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
