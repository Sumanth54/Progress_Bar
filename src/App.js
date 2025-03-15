import "./styles.css";
import ProgressBar from "./component/ProgressBar";
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar value={value} />
    </div>
  );
}
