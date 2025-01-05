import "./MarcasAutorizadas.scss"

function MarcasAutorizadas() {

  return (
    <>
      <div id="marcas-autorizadas" className="marcas-autorizadas">
        <div className="header-marcas-autorizadas">
          <div className="ponto"></div>
          <span className="linha"></span>
          <div className="titulo-marcas-autorizadas">Marcas Autorizadas</div>
          <div className="subtitulo-marcas-autorizadas">Conheça as marcas autorizadas com que trabalhamos</div>
        </div>
        <div className="carrossel-marcas">
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Banda Audioparts</div>
          </div>
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Expert Eletronics</div>
          </div>
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">JFA Eletrônicos</div>
          </div>
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Soundigital</div>
          </div>
          {/* <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Stetsom</div>
          </div>
          <div className="marca">
            <img src="src/assets/images/marcas-autorizadas/marca.png" alt="Marca 1" />
            <div className="nome-marca">Zebu</div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MarcasAutorizadas
