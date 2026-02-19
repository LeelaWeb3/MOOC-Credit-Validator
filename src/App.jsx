import { useState } from "react";

function App() {
  const [nptelCredits, setNptelCredits] = useState("");
  const [result, setResult] = useState("");

  const calculateCredits = () => {
    if (!nptelCredits || nptelCredits <= 0) {
      setResult("Please enter valid credits");
      return;
    }

    // Example conversion rule
    const universityCredits = nptelCredits / 2;

    if (universityCredits >= 3) {
      setResult(
        `Eligible! University Credits: ${universityCredits}`
      );
    } else {
      setResult(
        `Not Eligible. University Credits: ${universityCredits}`
      );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MOOC Credit Validator</h1>

      <input
        type="number"
        placeholder="Enter NPTEL Credits"
        value={nptelCredits}
        onChange={(e) => setNptelCredits(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateCredits}>
        Validate
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
