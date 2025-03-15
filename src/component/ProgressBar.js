import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <>
      <div className="progressBar">
        <span>{percent.toFixed()}%</span>
        <div className="percentAbr" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
};
export default ProgressBar;
