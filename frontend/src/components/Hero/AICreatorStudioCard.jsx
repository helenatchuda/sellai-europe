import React from 'react';

function AICreatorStudioCard() {
  return (
    <div className="creator-card">
      <div className="creator-card-header">
        <span className="creator-dot creator-dot-red" />
        <span className="creator-dot creator-dot-yellow" />
        <span className="creator-dot creator-dot-green" />
        <span className="creator-card-title">
          AI Creator Studio — sellai.europe
        </span>
      </div>

      <div className="creator-card-body">
        <div className="creator-prompt-group">
          <label className="creator-label">
            Descreve o teu produto
          </label>
          <div className="creator-prompt">
            Quero vender um curso de inglês para profissionais.
          </div>
        </div>

        <div className="creator-status">
          <span className="creator-status-dot" />
          Gerado em 52 segundos
        </div>

        <div className="creator-results">
          <div className="creator-result">
            <div className="creator-result-icon creator-icon-blue">
              🌐
            </div>
            <div className="creator-result-copy">
              <div className="creator-result-title creator-title-blue">Landing page</div>
              <div className="creator-result-description">
                Curso de Inglês Profissional — De Intermédio a Fl...
              </div>
            </div>
          </div>

          <div className="creator-result">
            <div className="creator-result-icon creator-icon-indigo">
              📧
            </div>
            <div className="creator-result-copy">
              <div className="creator-result-title creator-title-indigo">E-mail</div>
              <div className="creator-result-description">
                Assunto: "Ainda a pensar? Aqui está o que perdes..."
              </div>
            </div>
          </div>

          <div className="creator-result">
            <div className="creator-result-icon creator-icon-amber">
              ✍️
            </div>
            <div className="creator-result-copy">
              <div className="creator-result-title creator-title-amber">Copy</div>
              <div className="creator-result-description">
                E se o inglês deixasse de ser a razão pela qual per...
              </div>
            </div>
          </div>

          <div className="creator-result">
            <div className="creator-result-icon creator-icon-purple">
              🎬
            </div>
            <div className="creator-result-copy">
              <div className="creator-result-title creator-title-purple">Vídeo promo</div>
              <div className="creator-result-description">
                [0s] "O inglês está a custar-te dinheiro, literalment...
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AICreatorStudioCard;