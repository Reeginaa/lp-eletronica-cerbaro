import "./Contato.scss"

function Contato() {

  return (
    <>
      <div className="contato">
        <div className="container mx-auto">
          <div className="titulo-contato">Entre em Contato Conosco</div>
          <div className="descricao-contato">
            Tem alguma dúvida, precisa de um orçamento ou deseja agendar um serviço? Fique à vontade para falar com a nossa equipe diretamente pelo WhatsApp! Clique no botão abaixo e estamos prontos para atendê-lo com agilidade e qualidade.
          </div>
          <a href="#" className="btn-whatsapp">
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

export default Contato
