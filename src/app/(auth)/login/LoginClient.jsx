"use client";
import React, { useState } from "react";
// @가 src 폴더를 의미한다.
import LogoPath from "@/assets/colorful.svg";
import Image from "next/image";

const LoginClient = () => {
  const [value, setValue] = useState("");
  return (
    <section>
      <div>
        <h1>
          <Image src={LogoPath} alt="logo" property />
        </h1>
        <form>
          {/* Input */}
          <div>{/* 자동 로그인, 비밀번호 수정*/}</div>
          <div>
            {/* Button */}
            <div>{/* Button */}</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginClient;
