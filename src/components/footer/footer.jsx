import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <form>
          <input
            type="text"
            name="feedback"
            id="feedback"
            placeholder="coming soon"
            disabled
          />
          <button type="submit">FEEDBACK</button>
        </form>
      </footer>
    </>
  );
};
