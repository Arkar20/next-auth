import jwt from "jsonwebtoken";

const KEY = "hellohowareyou";

export default function verfiy(req, res) {
  const { token } = req.body;
  console.log(token);

  const isValid = jwt.verify(token, KEY);

  console.log(isValid);

  res.json({ isValid });
}
