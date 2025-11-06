import React from 'react'

export default function Avaliacoes() {
  return (
    <div className='avaliacoes-section'>
      <div className='page-inner-content'>
        <div className="section-title">
          <h3>O que Nossas Clientes Dizem</h3>
          <div className="underline"></div>
        </div>
        
        <div className="avaliacoes">
          <div className="avaliacao">
            <p>"</p>
            <p>
              Comprei o conjunto para um evento e recebi vários elogios! O body tem um caimento perfeito e o tecido é super confortável. A saia tem um balanço lindo quando ando. A qualidade superou minhas expectativas!
            </p>
            <p className='rate'>⭐⭐⭐⭐⭐</p>
            <p>Fernanda Pessoa • São Paulo</p>
          </div>
          
          <div className="avaliacao">
            <p>"</p>
            <p>
              Estava com receio de comprar roupa online, mas as medidas da tabela são precisas. O conjunto valoriza muito o corpo sem ser apertado. O material é de ótima qualidade - não desbotou depois de várias lavagens!
            </p>
            <p className='rate'>⭐⭐⭐⭐⭐</p>
            <p>Júlia Souza • Rio de Janeiro</p>
          </div>
          
          <div className="avaliacao">
            <p>"</p>
            <p>
              Visual sofisticado e confortável! Usei em um casamento e fiquei linda nas fotos. O body segura tudo no lugar e a saia tem um movimento lindo. Vale cada centavo! Já quero em outras cores!
            </p>
            <p className='rate'>⭐⭐⭐⭐⭐</p>
            <p>Márcia Naya • Minas Gerais</p>
          </div>
        </div>
      </div>
    </div>
  )
}