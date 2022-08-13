import { useState } from "react";
import Settings from "../settings/Settings";
import { Homepage } from "../Homepage/Homepage";
import "./Home.css";
import { Footer } from "../footer/footer";

const Home = () => {
  const [settings, setSettings] = useState(true);
  return (
    <>
      {settings ? <Homepage /> : <Settings />}
      <Footer />
    </>
  );
};
export default Home;
