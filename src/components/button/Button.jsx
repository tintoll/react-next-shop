import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  className = "",
  ...restProps
}) => {
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
