import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface IButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  secondary?: boolean;
  bgColor?: string;
  fgColor?: string;
  width?: string;
  [x: string]: any;
}

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  className = "",
  ...restProps
}: IButtonProps) => {
  const composeClasses = classNames(
    styles.button,
    secondary ? styles.secondary : styles.primary
  );
  const customStyle = {
    backgroundColor: bgColor || "",
    color: fgColor || "",
    width: width || "",
  };
  return (
    <button
      type={type}
      className={classNames(composeClasses, className)}
      style={customStyle}
      {...restProps}
    />
  );
};

export default Button;
