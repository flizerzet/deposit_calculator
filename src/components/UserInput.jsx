export const UserInput = ({ onInputChange, userInput }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          <span>Initial investment</span>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </label>
        <label>
          <span>Annual investment</span>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <span>Expected return (%)</span>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
          />
        </label>
        <label>
          <span>Duration</span>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

// {/* <InputElement
// 	value={IIData}
// 	onInputChange={handleIIData}
// 	name="Initial investment"
// /> */}
