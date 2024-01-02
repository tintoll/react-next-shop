import classNames from "classnames";
import React from "react";
import styles from "./Tooltip.module.scss";

interface ITooltipProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  color?: string;
  bgColor?: string;
  orientation?: "top" | "right" | "bottom" | "left";
  message: string;
  [x: string]: any;
}

const Tooltip = ({
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  color = "",
  bgColor = "",
  orientation = "top",
  message,
  ...restProps
}: ITooltipProps) => {
  const style = {
    top,
    bottom,
    right,
    left,
    color,
    backgroundColor: bgColor,
  };

  const setOrientationClass = (type: string) => {
    switch (type) {
      case "top":
        return styles.orientationTop;
      case "right":
        return styles.orientationRight;
      case "left":
        return styles.orientationLeft;
      case "Bottom":
        return styles.orientationBottom;
    }
  };
  return (
    <span
      style={style}
      className={classNames(styles.tooltip, setOrientationClass(orientation))}
      role="tooltip"
      {...restProps}
    >
      {message}
    </span>
  );
};

export default Tooltip;
