import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
export default function RenderBlocks({ cBlocks }) {
  useEffect(() => {}, [cBlocks]);
  return (
    <>
      {cBlocks.map((block) => {
        return (
          <>
            <div key={uuid()}>{block}</div>
          </>
        );
      })}
    </>
  );
}
