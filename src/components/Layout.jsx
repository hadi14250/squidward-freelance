import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import EnterPage from "../pages/EnterPage";

const Layout = () => {
  const [enter, setEnter] = useState(false);
  const audioRef = useRef(new Audio("/audio/spongebob.mp3"));
  const [play, setPlay] = useState(false);
  const togglePlay = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay((prev) => !prev);
  };
  return (
    <>
      {!enter ? (
        <EnterPage togglePlay={togglePlay} setEnter={setEnter} />
      ) : (
        <div>
          <Header togglePlay={togglePlay} play={play} />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Layout;
