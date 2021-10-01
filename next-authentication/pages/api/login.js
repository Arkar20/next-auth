import jwt from "jsonwebtoken";

const KEY = "hellohowareyou";

export default function login(req, res) {
  const { name, password } = req.body;

  const token = jwt.sign({ name, admin: name === "arkar" }, KEY);
  res.json({ token });
}
