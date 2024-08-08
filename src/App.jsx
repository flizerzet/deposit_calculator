import { useState } from "react";
import { Header } from "./components/Header";
import { ResultList } from "./components/ResultList";
import { UserInput } from "./components/UserInput";

import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue != '' ? parseInt(newValue) : '',
      };
    });
  };

  const result = calculateInvestmentResults(userInput);

  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} userInput={userInput} />
      {	(userInput.initialInvestment != 0 &&
        userInput.annualInvestment != 0 &&
        userInput.expectedReturn != 0 &&
        userInput.duration != 0) && (
          <ResultList
            result={result}
            initialInvestment={userInput.initialInvestment}
          />
        )}
    </>
  );
}

export default App;
