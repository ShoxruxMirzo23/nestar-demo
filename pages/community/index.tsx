//"use client";
import { useState } from "react";
const Community = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER");
  const [title, seTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press Me
      </button>
    </div>
  );
};

export default Community;
