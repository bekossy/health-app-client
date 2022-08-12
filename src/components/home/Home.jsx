import "./Home.css";
import { useState } from "react";
import Settings from "../settings/Settings";

const Home = () => {
  const [settings, setSettings] = useState(true);
  return <>{settings && <Settings />}</>;
};

export default Home;
