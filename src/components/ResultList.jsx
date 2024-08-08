import { ResultElem } from "./ResultElem";

export const ResultList = ({ result, initialInvestment }) => {
  return (
    <>
      <ul className="result-header center">
        <li>Year</li>
        <li>Investment value</li>
        <li>Interest (year)</li>
        <li>Total interest</li>
        <li>Invested capital</li>
      </ul>
      {result.length > 0 && (
        <ul>
          {result.map((elem) => (
            <ResultElem
              key={elem.year}
              year={elem.year}
              investValue={elem.investmentValue}
              intYear={elem.interestForYear}
              total={elem.totalInterest}
              invCap={elem.investedCapital}
              initialInvestment={initialInvestment}
            />
          ))}
        </ul>
      )}
    </>
  );
};
