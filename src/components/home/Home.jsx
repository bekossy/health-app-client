import { useState } from "react";
import Settings from "../settings/Settings";
import { Homepage } from "../Homepage/Homepage";
import "./Home.css";

const Home = () => {
  const [settings, setSettings] = useState(false);
  return <>{settings ? <Homepage /> : <Settings />}</>;
};
export default Home;
