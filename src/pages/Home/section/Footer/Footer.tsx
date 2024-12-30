import FixedButtonScrollUp from "../../../../components/FixedButtonScrollUp/FixedButtonScrollUp"
import FixedButtonWhatsApp from "../../../../components/FixedButtonWhatsApp/FixedButtonWhatsApp"
import "./Footer.scss"

function Footer() {

  return (
    <>
      <div className="footer">
        <div className="container mx-auto">
          <div className="coluna">
            <div className="titulo-coluna">Endereço</div>
            <div className="informacoes">
              <div className="info">Rua Padre Aneto Bogni, 333</div>
              <div className="info">Bairro Centro</div>
              <div className="info">CEP: 99270-000</div>
              <div className="info">Casca - RS</div>
            </div>
          </div>

          <div className="coluna">
            <div className="titulo-coluna">Horários</div>
            <div className="informacoes">
              <div className="info">Seg. à Sex - 08:30h às 18h</div>
              <div className="info">Sab - 08:30h às 11:45h</div>
            </div>
          </div>

          <div className="coluna">
            <div className="titulo-coluna">Contato</div>
            <div className="informacoes">
              <a href="#" target="_blank" className="info-link">WhatsApp: (54) 99999-9999</a>
              <a href="mailto:seuemail@email.com" target="_blank" className="info-link">E-mail: seuemail@email.com</a>
            </div>
          </div>

          <div className="coluna">
            <div className="titulo-coluna">Social</div>
            <div className="informacoes">
              <a href="#" target="_blank" className="info-link">Instagram</a>
              <a href="#" target="_blank" className="info-link">Facebook</a>
            </div>
          </div>

          <div className="coluna">
            <img src="src/assets/images/logo.png" alt="Logo" />
          </div>
        </div>
        <div className="infos-empresa">
          <div className="texto-info">ELETRÔNICA CERBARO E CONVENIÊNCIA - CNPJ 17.714.555/0001-06</div>
          <div className="texto-info">Todos os direitos reservados - 2024</div>
        </div>
      </div>

      <FixedButtonWhatsApp />
      <FixedButtonScrollUp />
    </>
  )
}

export default Footer
