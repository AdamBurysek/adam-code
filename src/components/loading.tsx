import React from "react";
import LoadingGif from "../images/loading.gif";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        top: 0,
      }}
    >
      {/* <p style={{ top: 100, padding: 0, margin: 0 }}>Loading...</p> */}
      <img src={LoadingGif} />
    </div>
  );
};

export default Loading;
