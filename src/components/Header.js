function Header(props) {
  const { title, lastname, logMes } = props;
  return (
    <div>
      <h1>menu</h1>
      <h2>{title}</h2>
      <h3 onClick={() => logMes(title)}>{lastname}</h3>
    </div>
  );
}

export default Header;
