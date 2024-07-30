import React from "react";

export interface DividerProps {
  orientation?: "horizontal";
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: "dashed" | "dotted" | "solid";
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  width = "100%",
  height = "1px",
  color = "#ddd",
  style = "solid",
}) => {
  if (orientation === "horizontal") {
    return (
      <hr
        style={{
          width,
          height,
          border: `${style} ${height} ${color}`,
          margin: 0,
        }}
      />
    );
  } else {
    return (
      <div
        style={{
          width: height,
          height: width,
          border: `none`,
          borderTop: `${style} ${width} ${color}`,
          margin: "0 auto",
        }}
      />
    );
  }
};
