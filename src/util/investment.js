// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
// export function calculateInvestmentResults({
//   initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration,
// }) {
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += 1;
//     annualData.push({
//       year: i + 1, // year identifier
//       interest: interestEarnedInYear, // the amount of interest earned in this year
//       valueEndOfYear: investmentValue, // investment value at end of year
//       annualInvestment: annualInvestment, // investment added in this year
//     });
//   }

//   return annualData;
// }

export function calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration}) {
	// Convert expected return to decimal
	const returnRate = expectedReturn / 100;

	let investmentValue = initialInvestment;
	let totalInterest = 0;
	let investedCapital = initialInvestment;
	let yearlyResults = [];

	for (let year = 1; year <= duration; year++) {
		// Add annual investment at the beginning of each year (except the first year)
		if (year > 1) {
			investmentValue += annualInvestment;
			investedCapital += annualInvestment;
		}

		// Calculate interest for the year
		const interestForYear = investmentValue * returnRate;

		// Update investment value
		investmentValue += interestForYear;

		// Update total interest
		totalInterest += interestForYear;

		// Store results for each year
		yearlyResults.push({
			year,
			investmentValue: investmentValue,
			interestForYear: interestForYear,
			totalInterest: totalInterest,
			investedCapital: investedCapital
		});
	}

	// return {
	// 	finalInvestmentValue: investmentValue,
	// 	totalInterest: totalInterest,
	// 	investedCapital: investedCapital,
	// 	yearlyResults
	// };
	return yearlyResults;
}


// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
