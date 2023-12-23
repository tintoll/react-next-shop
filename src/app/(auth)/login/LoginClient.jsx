"use client";
import React, { useState } from "react";
// @가 src 폴더를 의미한다.
import LogoPath from "@/assets/colorful.svg";
import Image from "next/image";

import styles from "./Auth.module.scss";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import Input from "@/components/Input/Input";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDetault();
    setisLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" property />
          </h1>
          <form onSubmit={loginUser} className={styles.form}>
            {/* Input */}
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="passsword"
              name="passsword"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => {
                  setIsAutoLogin(e.target.checked);
                }}
              />
            </div>
            <div className={styles.buttonGroup}>
              {/* Button */}
              <div>{/* Button */}</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
