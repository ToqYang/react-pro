import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Text with the description
   */
  label: string;
  /**
   * Long of the button
   */
  size: "normal" | "h1" | "h2" | "h3";
  color: "primary" | "secondary" | "tertiary";
  allCaps?: boolean;
  /**
   * What background color to use
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor = "black",
}: MyLabelProps) => {
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
