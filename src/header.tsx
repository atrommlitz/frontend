function Header(props: any) {
  return (
    <header className="row header navbar navbar-dark bg-dark">
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <p className="text-white">
          Welcome to the Bowling Database. Here You Will Find All the
          Information About Our Bowling Teams
        </p>
      </div>
    </header>
  );
}

export default Header;
