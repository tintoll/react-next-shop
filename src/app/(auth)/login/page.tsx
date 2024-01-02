import React from "react";
import LoginClient from "./LoginClient";

const Login = () => {
  // 기본적으로 서버 컴포넌트이기 때문에 useState를 사용하면 에러가 난다.
  // page는 최대한 서버컴퍼넌트 유지 하고 클라이언트 컴포넌트를 추가하여 넣어준다.
  // const [value, setValue] = useState("");
  return <LoginClient />;
};

export default Login;
