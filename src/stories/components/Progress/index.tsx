import React, { useState, useEffect } from "react";

export interface ProgressProps {
  value: number;
  max: number;
  color: string;
  backgroundColor: string;
  height: number;
  width: number;
  borderRadius: number;
  animationDuration: number;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max,
  color,
  backgroundColor,
  height,
  width,
  borderRadius,
  animationDuration,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < value) {
          return Math.min(prevProgress + 1, value);
        }
        return prevProgress;
      });
    }, animationDuration);

    return () => clearInterval(intervalId);
  }, [value, animationDuration]);

  const progressStyle = {
    width: `${(progress / max) * 100}%`,
    height,
    backgroundColor: color,
    borderRadius,
  };

  const backgroundStyle = {
    width,
    height,
    backgroundColor,
    borderRadius,
  };

  return (
    <div style={backgroundStyle}>
      <div style={progressStyle} />
    </div>
  );
};

Progress.defaultProps = {
  value: 0,
  max: 100,
  color: "#4CAF50",
  backgroundColor: "#E0E0E0",
  height: 10,
  width: 200,
  borderRadius: 5,
  animationDuration: 100,
};

export default Progress;
