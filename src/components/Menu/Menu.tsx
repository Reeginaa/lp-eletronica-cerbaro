import "./Menu.scss"

function Menu() {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="container mx-auto">
          <img src="src/assets/images/logo.png" alt="Logo" className="logo"/>
          <ul className="menus">
            <li className="menu-item">
              <a href="#servicos" onClick={(e) => handleScroll(e, "servicos")}>Serviços</a>
            </li>
            <li className="menu-item">
              <a href="#marcas-autorizadas" onClick={(e) => handleScroll(e, "marcas-autorizadas")}>Marcas Autorizadas</a>
            </li>
            <li className="menu-item">
              <a href="#clientes" onClick={(e) => handleScroll(e, "clientes")}>Clientes</a>
            </li>
            <li className="menu-item">
              <a href="#quem-somos" onClick={(e) => handleScroll(e, "quem-somos")}>Quem Somos</a>
            </li>
            <li className="menu-item">
              <a href="#contato" onClick={(e) => handleScroll(e, "contato")}>Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
