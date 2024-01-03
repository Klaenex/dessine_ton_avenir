function Header() {
  return (
    <header>
      <div>
        <a href="http://www.fcjmp.be" target="_blank" rel="noopener noreferrer">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/images/fcjmp.png"}
            alt="Logo de la fédération des centres de jeune en millieu populaire"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
