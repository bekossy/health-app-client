import { useState } from "react";
import "./footer.css";
export const Footer = () => {
  const [footer, setFooter] = useState("");
  const handleFooter = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFooter("");
    }, 2000);
    setFooter("you feedback has been sent successfully");
  };
  return (
    <>
      <footer>
        <form onSubmit={handleFooter}>
          <input
            type="text"
            name="feedback"
            id="feedback"
            value={footer}
            onChange={(e) => setFooter(e.target.value)}
          />
          <button type="submit">FEEDBACK</button>
        </form>
      </footer>
    </>
  );
};
