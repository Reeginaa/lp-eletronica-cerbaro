import "./Menu.scss"

function Menu() {

  return (
    <>
      <div className="navbar">
        <div className="container mx-auto">
          <img src="src/assets/images/logo.png" alt="Logo" className="logo"/>
          <ul className="menus">
            <li className="menu-item">
              <a href="#servicos">Serviços</a>
            </li>
            <li className="menu-item">
              <a href="#marcas-autorizadas">Marcas Autorizadas</a>
            </li>
            <li className="menu-item">
              <a href="#clientes">Clientes</a>
            </li>
            <li className="menu-item">
              <a href="#quem-somos">Quem Somos</a>
            </li>
            <li className="menu-item">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
