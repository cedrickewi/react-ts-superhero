import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    if (login !== true) {
      setLogin(true);
      return;
    }

    const data = { email, password };

    console.log(data);
  };

  // Register new User
  const handleRegister = () => {
    if (login !== false) {
      setLogin(false);
      return;
    }
    console.log("Handle Register");

    const data = { email, password, confirmPassword };
    console.log(data);
  };

  return (
    <div className="w-full md:w-[455px]">
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        {login ? "Login" : "Register"}
      </h1>
      <div className="flex flex-col gap-3 bg-white min-h-[150px] p-6 w-full rounded-xl drop-shadow-xl">
        <Input
          name="email"
          type="email"
          onChange={(e: any) => {
            // e.preventDefault
            setEmail((prev) => e.target.value);
            console.log(email);
          }}
          value={email}
        />
        <Input
          name="Password"
          type="password"
          onChange={(e: any) => {
            // e.preventDefault
            setPassword((prev) => e.target.value);
          }}
          value={password}
        />
        {!login && (
          <Input
            name="Confirm Password"
            type="password"
            onChange={(e: any) => {
              // e.preventDefault
              setConfirmPassword((prev) => e.target.value);
            }}
            value={confirmPassword}
          />
        )}
        <Button text="Login" onClick={handleLogin} />
        <Button text="Register" secondary={true} onClick={handleRegister} />
      </div>
    </div>
  );
}

export default Login;
