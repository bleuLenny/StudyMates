const Header = ({ title }) => {
  return (
    <header>
      <h1>Home</h1>
      <h1>{title}</h1>
      <form action="/study">
        <input></input>
        <button>Submit</button>
      </form>
    </header>
  );
};

Header.defaultProps = {
  title: "Study Mates",
};
export default Header;
