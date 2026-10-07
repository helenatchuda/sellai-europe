import React, { useState, useEffect } from 'react';

function AICreatorStudioCard() {
  // Step 0: Apenas Input
  // Step 1: Input + Status "Gerando..."
  // Step 2: Resultado completo com Cards
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 3); 
    }, 4000); // Muda de estado a cada 4 segundos

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="creator-card">
      {/* Header do Card */}
      <div className="creator-card-header">
        <span className="creator-dot creator-dot-red" />
        <span className="creator-dot creator-dot-yellow" />
        <span className="creator-dot creator-dot-green" />
        <span className="creator-card-title">
          AI Creator Studio — sellai.europe
        </span>
      </div>

      <div className="creator-card-body">
        {/* Step 0, 1 e 2: O prompt inicial aparece sempre */}
        <div className="creator-prompt-group">
          <label className="creator-label">
            Descreve o teu produto
          </label>
          <div className="creator-prompt">
            Quero vender um curso de inglês para profissionais.
          </div>
        </div>

        {/* Step 1 e 2: O indicador de progresso / status */}
        {step >= 1 && (
          <div className="creator-status animate-fade-in">
            <span className="creator-status-dot" />
            {step === 1 ? 'A gerar oferta com IA...' : 'Gerado em 52 segundos'}
          </div>
        )}

        {/* Step 2: O design completo com os 4 cards de resultado */}
        {step === 2 && (
          <div className="creator-results animate-slide-up">
            <div className="creator-result">
              <div className="creator-result-icon creator-icon-blue">🌐</div>
              <div className="creator-result-copy">
                <div className="creator-result-title creator-title-blue">Landing page</div>
                <div className="creator-result-description">
                  Curso de Inglês Profissional — De Intermédio a Fl...
                </div>
              </div>
            </div>

            <div className="creator-result">
              <div className="creator-result-icon creator-icon-indigo">📧</div>
              <div className="creator-result-copy">
                <div className="creator-result-title creator-title-indigo">E-mail</div>
                <div className="creator-result-description">
                  Assunto: "Ainda a pensar? Aqui está o que perdes..."
                </div>
              </div>
            </div>

            <div className="creator-result">
              <div className="creator-result-icon creator-icon-amber">✍️</div>
              <div className="creator-result-copy">
                <div className="creator-result-title creator-title-amber">Copy</div>
                <div className="creator-result-description">
                  E se o inglês deixasse de ser a razão pela qual per...
                </div>
              </div>
            </div>

            <div className="creator-result">
              <div className="creator-result-icon creator-icon-purple">🎬</div>
              <div className="creator-result-copy">
                <div className="creator-result-title creator-title-purple">Vídeo promo</div>
                <div className="creator-result-description">
                  [0s] "O inglês está a custar-te dinheiro, literalment...
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AICreatorStudioCard;