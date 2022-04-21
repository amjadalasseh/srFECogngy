import React, { FC } from "react";

export const History: FC = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid black",
        padding: 10,
        flexGrow: 1,
        overflowY:"auto",
        
        
      }}
      id="History-id"
    >
      {props.children}
    </div>
  );
};
