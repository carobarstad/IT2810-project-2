import React from "react";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import DisplayBox from "./components/DisplayBox";
import SettingsBox from "./components/SettingsBox";
import "./components/components.css";

export default function App() {
  return (
    <div className="Wrapper">
      <Header />
      <InfoBox />
      <DisplayBox />
      <SettingsBox />
    </div>
  );
}
