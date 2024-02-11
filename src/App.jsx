import CoreConcepts from "./components/Core-Concepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  let text = "React Essentials";

  return (
    <div>
      <Header text={text} />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
