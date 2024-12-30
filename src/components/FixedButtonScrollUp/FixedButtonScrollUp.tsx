import { useEffect, useState } from 'react';
import './FixedButtonScrollUp.scss';

function FixedButtonScrollUp() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Função para verificar a posição do scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true); //Mostra o botão após 300px
      } else {
        setShowScrollUp(false); //Esconde o botão
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed-button-scroll-up">
      {/* Botão Scroll Up (condicional) */}
      {showScrollUp && (
        <button className="button scroll-up-button" onClick={handleScrollUp} aria-label="Scroll Up">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" id="up">
            <path d="M91.2 67.6a4 4 0 0 1-6.83 2.83L48 34.06 11.63 70.43A4 4 0 0 1 6 64.77l39.2-39.2a4 4 0 0 1 5.66 0L90 64.77a4 4 0 0 1 1.2 2.83Z"></path>
          </svg>
        </button>
      )}
    </div>
  )
}

export default FixedButtonScrollUp;