import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please Enter Your Data");
      return;
    }
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(1);

    let category = "";
    if (bmi < 18.5) {
      category = "under weight";
    } else if (bmi < 25) {
      category = "normal weight";
    } else if (bmi < 30) {
      category = "over weight";
    } else {
      category = "obese";
    }

    setResult(`Your BMI is ${bmi}: You are ${category}`);
  };

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>

        <label htmlFor="height">Height:</label>
        <input
                id="height"
          placeholder="Write your Height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />

        <label htmlFor="weight">Weight:</label>
        <input
   
          id="weight"
          placeholder="Write your Weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />

        <button onClick={calculateBMI}>Calculate</button>

        <div className="result">{result}</div>
      </div>
    </>
  );
}

export default App;
