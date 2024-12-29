import Menu from "../../components/Menu/Menu"
import Clientes from "./section/Clientes/Clientes"
import Contato from "./section/Contato/Contato"
import Hero from "./section/Hero/Hero"
import MarcasAutorizadas from "./section/MarcasAutorizadas/MarcasAutorizadas"
import QuemSomos from "./section/QuemSomos/QuemSomos"
import Servicos from "./section/Servicos/Servicos"

const Home = () => {

  return (
    <>
      <Menu />
      <Hero />
      <Servicos />
      <MarcasAutorizadas />
      <Clientes />
      <QuemSomos />
      <Contato />
    </>
  )
}

export default Home
