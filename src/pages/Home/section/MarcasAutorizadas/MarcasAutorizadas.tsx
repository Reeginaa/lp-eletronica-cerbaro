import "./MarcasAutorizadas.scss"

function MarcasAutorizadas() {

  return (
    <>
      <div className="marcas-autorizadas">
        <div className="header-marcas-autorizadas">
          <span className="linha"></span>
          <div className="titulo-marcas-autorizadas">Marcas Autorizadas</div>
          <div className="subtitulo-marcas-autorizadas">Conheça as marcas autorizadas com que trabalhamos</div>
        </div>
        <div className="carrossel-marcas">
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Marca 1</div>
          </div>
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Marca 2</div>
          </div>
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Marca 3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarcasAutorizadas
