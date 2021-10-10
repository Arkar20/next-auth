import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.json({ error: "You are not login" });
  }
  return res.json(session);
}
