// import Comment from "./Comment";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
import { useState } from "react";
const Comment = dynamic(() => import("./Comment"));

export default function Lazyload() {
  const [seeComment, setSeeComment] = useState(false);

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  console.log(inView);

  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>lazy load page</div>
      <button onClick={() => setSeeComment(true)}>Click To See Comment</button>
      <div ref={observe}>{inView && <Comment />}</div>
    </div>
  );
}
