import { Homepage } from "../Homepage/Homepage";
import "./Home.css";
import { useState } from "react";
import Settings from "../settings/Settings";

const Home = () => {
  const [settings, setSettings] = useState(true);
  return <>{settings ? <Homepage /> : <Settings />}</>;
};

export default Home;
