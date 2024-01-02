import React from "react";

import letterPath from "./images/shape=letter.svg";
import hidePath from "./images/shape=hide.svg";
import lockPath from "./images/shape=lock.svg";
import showPath from "./images/shape=show.svg";
import Image from "next/image";

interface IIconProps {
  type: "letter" | "lock" | "show" | "hide";
  alt?: string;
  [x: string]: any;
}

const Icon = ({ type, alt = "", ...restProps }: IIconProps) => {
  let src = "";
  switch (type) {
    case "letter":
      src = letterPath;
      break;
    case "show":
      src = showPath;
      break;
    case "hide":
      src = hidePath;
      break;
    case "lock":
      src = lockPath;
      break;
    default:
      throw Error("지원하지 않는 타입입니다.");
  }

  return <Image src={src} alt={alt} {...restProps} />;
};

export default Icon;
