import "./Contato.scss"

function Contato() {

  return (
    <>
      <div id="contato" className="contato">
        <div className="container mx-auto">
          <div className="titulo-contato">Entre em Contato Conosco</div>
          <div className="descricao-contato">
            Tem alguma dúvida, precisa de um orçamento ou deseja agendar um serviço? Fique à vontade para falar com a nossa equipe diretamente pelo WhatsApp! Clique no botão abaixo e estamos prontos para atendê-lo com agilidade e qualidade.
          </div>
          <a href="https://api.whatsapp.com/send?phone=5554996335085&text=Ol%C3%A1!%0AEstou%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." className="btn-whatsapp">
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

export default Contato
