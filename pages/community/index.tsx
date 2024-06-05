//"use client";
import withLayoutBasic from "@/libs/components/layouts/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";
const Community: NextPage = () => {
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

export default withLayoutBasic(Community);
