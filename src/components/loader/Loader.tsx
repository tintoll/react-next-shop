import React, { ChangeEvent } from "react";
import styles from "./Loader.module.scss";
import { RotatingLines } from "react-loader-spinner";

interface IInputProps {
  id: string;
  label: string;
  name?: string;
  labelVisible?: boolean;
  icon?: "letter" | "lock" | "show" | "hide";
  email?: boolean;
  password?: boolean;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  value?: string;
  error?: { message: string };
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

const Loader = ({ basic }: IInputProps) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
