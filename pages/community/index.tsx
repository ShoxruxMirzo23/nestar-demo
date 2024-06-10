//"use client";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, seTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press Me
      </button>
      <div>MIT-9 </div>
    </div>
  );
};

export default withLayoutBasic(Community);
