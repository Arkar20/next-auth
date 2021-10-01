import Link from "next/link";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const login = async () => {
    const KEY = "hellohowareyou";

    const result = await axios.post("/api/login", { name, password });
    setToken(result.data.token);
    // const message = jwt.decode(result.data.token);
    // console.log(message);

    const isAdmin = jwt.verify(result.data.token, KEY);
    console.log(isAdmin);
    // const isValid = await axios.post("/api/verify", { token });

    // isValid.data.isValid ? console.log("is true") : console.log("not true");
  };

  return (
    <>
      {token && <div>You are logined.</div>}
      <Link href="/Home">Go to Home</Link>
      <form action="" metho="POST">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br></br>
        <input type="button" value="Login" onClick={login} />
      </form>
    </>
  );
}
