import Header from "./components/Header/Header.jsx";
import InputPanel from "./components/InputPanel.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <InputPanel userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center"> Please enter a valid duration</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
