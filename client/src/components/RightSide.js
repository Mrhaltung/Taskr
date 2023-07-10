import React, { useState } from "react";
import {
  UilSetting,
  UilEstate,
  UilBell,
  UilMessage,
} from "@iconscout/react-unicons";
import ShareModal from "./ShareModal";
import TrendCard from "./TrendCard";
import { Link } from "react-router-dom";

export default function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <Link to="../home" style={{ textDecoration: "none", color: "inherit" }}>
          <UilEstate />
        </Link>
        <UilSetting />
        <UilBell />
        <Link to="/chat" style={{ textDecoration: "none", color: "inherit" }}>
          <UilMessage />
        </Link>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}
