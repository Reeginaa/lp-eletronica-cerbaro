import { Navigation } from "swiper/modules";
import "./Servicos.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselServicos from "../../../../components/CarrosselServicos/CarrosselServicos";
// import "swiper/css";
// import "swiper/css/navigation";

const Servicos = () => {

  const images = [
    "/public/carrossel-servicos/servicos-em-eletronica/1.jpg",
    "/public/carrossel-servicos/servicos-em-eletronica/2.jpg",
    "/public/carrossel-servicos/servicos-em-eletronica/3.jpg",
    "/public/carrossel-servicos/servicos-em-eletronica/4.jpg"
  ];

  return (
    <>
      <div className="servicos">
        <div className="header-servicos">
          <div></div>
          <div className="texto-servicos">
            <div className="titulo-servicos">
              Nossos Serviços
            </div>
            <div className="subtitulo-servicos">
              Conheça um pouco mais dos serviços que prestamos
            </div>
          </div>
          <span className="linha"></span>
        </div>
        <div className="container mx-auto">
          <div className="conteudo-servicos">
            <div className="tipos-servicos">
              <div className="tipo-servico">
                Serviços em eletrônica
              </div>
              <div className="tipo-servico">
                Instalação e assistência de parabólicas
              </div>
              <div className="tipo-servico">
                Instalação e manutenção de redes de internet
              </div>
              <div className="tipo-servico">
                Conserto de celulares
              </div>
              <div className="tipo-servico">
                Informática em geral
              </div>
              <div className="tipo-servico">
                Conserto de televisores
              </div>
              <div className="tipo-servico">
                Módulos automotivos e auto rádios
              </div>
              <div className="tipo-servico">
                Conserto de eletrodomésticos
              </div>
              <div className="tipo-servico">
                Serviços em elétrica
              </div>
              <div className="tipo-servico">
                Instalações prediais e industriais
              </div>
              <div className="tipo-servico">
                Manutenções de redes antigas
              </div>
              <div className="tipo-servico">
                Métodos de redução de energia
              </div>
              <div className="tipo-servico">
                Conserto de portões eletrônicos
              </div>
              <div className="tipo-servico">
                Iluminações de ambientes decorativos
              </div>
              <div className="tipo-servico">
                Instalação de câmeras e alarmes residenciais
              </div>
              <div className="tipo-servico">
                Interfones residenciais e prediais
              </div>
            </div>
            <span className="divisor"></span>
            <div className="carousel">
              <CarrosselServicos/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicos
