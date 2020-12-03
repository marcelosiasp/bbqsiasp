import React, { useState, useEffect } from "react";

import images from "./images";
import bannerTop from "./images/BBQ-TOPO.png";

import "./styles/styles.css";

function App() {
  const [step, setStep] = useState(false);
  const users = {
    adrianaSilva: false,
    anaLuisa: true,
    chagasJunior: false,
    claudiaPontes: false,
    danielDouglas: false,
    emanuelFelipe: true,
    ernildoPorfirio: false,
    felipeFernandes: false,
    ivonzelioLeite: true,
    januseMartins: true,
    josieneCampos: false,
    keltonBorges: true,
    liviaMayara: false,
    lucasLima: true,
    luizFelipe: false,
    marceloHenrique: false,
    mateusPorfirio: false,
    maxEmiliano: false,
    pauloLilderio: false,
    renatoFernandes: false,
    tallesLopes: false,
    viniciusChaves: false,
  };
  if (step === true) {
    return (
      <>
        <div class="container">
          <div class="topo">
            <img src={bannerTop} alt="BBQ" />
          </div>
          <div class="container">
            <div class="title-event">
              <h2 class="title">Confirme sua presença abaixo!</h2>
            </div>
            <ul class="listUsers">
              <li class="avatar">
                <img
                  src={images.adrianaSilva}
                  alt="Adriana Silva"
                  style={{
                    filter:
                      users.adrianaSilva === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Adriana Silva</p>
              </li>
              <li class="avatar">
                <img
                  src={images.anaLuisa}
                  alt="Ana Luisa"
                  style={{
                    filter:
                      users.anaLuisa === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Ana Luisa</p>
              </li>
              <li class="avatar">
                <img
                  src={images.chagasJunior}
                  alt="Chagas Júnior"
                  style={{
                    filter:
                      users.chagasJunior === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Chagas Júnior</p>
              </li>
              <li class="avatar">
                <img
                  src={images.claudiaPontes}
                  alt="Cláudia Pontes"
                  style={{
                    filter:
                      users.claudiaPontes === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Cláudia Pontes</p>
              </li>
              <li class="avatar">
                <img
                  src={images.danielDouglas}
                  alt="Daniel Douglas"
                  style={{
                    filter:
                      users.danielDouglas === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Daniel Douglas</p>
              </li>
              <li class="avatar">
                <img
                  src={images.emanuelFelipe}
                  alt="Emanuel Felipe"
                  style={{
                    filter:
                      users.emanuelFelipe === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Emanuel Felipe</p>
              </li>
            </ul>
            <ul class="listUsers">
              <li class="avatar">
                <img
                  src={images.ernildoPorfirio}
                  alt="Ernildo Porfirio"
                  style={{
                    filter:
                      users.ernildoPorfirio === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Ernildo Porfirio</p>
              </li>
              <li class="avatar">
                <img
                  src={images.felipeFernandes}
                  alt="Felipe Fernandes"
                  style={{
                    filter:
                      users.felipeFernandes === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Felipe Fernandes</p>
              </li>
              <li class="avatar">
                <img
                  src={images.ivonzelioLeite}
                  alt="Ivonzélio Leite"
                  style={{
                    filter:
                      users.ivonzelioLeite === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Ivonzélio Leite</p>
              </li>
              <li class="avatar">
                <img
                  src={images.januseMartins}
                  alt="Januse Martins"
                  style={{
                    filter:
                      users.januseMartins === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Januse Martins</p>
              </li>
              <li class="avatar">
                <img
                  src={images.josieneCampos}
                  alt="Josiene Campos"
                  style={{
                    filter:
                      users.josieneCampos === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Josiene Campos</p>
              </li>
              <li class="avatar">
                <img
                  src={images.keltonBorges}
                  alt="Kelton Borges"
                  style={{
                    filter:
                      users.keltonBorges === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Kelton Borges</p>
              </li>
            </ul>
            <ul class="listUsers">
              <li class="avatar">
                <img
                  src={images.liviaMayara}
                  alt="Lívia Mayara"
                  style={{
                    filter:
                      users.liviaMayara === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Lívia Mayara</p>
              </li>
              <li class="avatar">
                <img
                  src={images.lucasLima}
                  alt="Lucas Lima"
                  style={{
                    filter:
                      users.lucasLima === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Lucas Lima</p>
              </li>
              <li class="avatar">
                <img
                  src={images.luizFelipe}
                  alt="Luiz Felipe"
                  style={{
                    filter:
                      users.luizFelipe === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Luiz Felipe</p>
              </li>
              <li class="avatar">
                <img
                  src={images.marceloHenrique}
                  alt="Marcelo Henrique"
                  style={{
                    filter:
                      users.marceloHenrique === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Marcelo Henrique</p>
              </li>
              <li class="avatar">
                <img
                  src={images.mateusPorfirio}
                  alt="Mateus Porfirio"
                  style={{
                    filter:
                      users.mateusPorfirio === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Mateus Porfirio</p>
              </li>
              <li class="avatar">
                <img
                  src={images.maxEmiliano}
                  alt="Max Emiliano"
                  style={{
                    filter:
                      users.maxEmiliano === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Max Emiliano</p>
              </li>
            </ul>
            <ul class="listUsers">
              <li class="avatar">
                <img
                  src={images.pauloLilderio}
                  alt="Paulo Lildério"
                  style={{
                    filter:
                      users.pauloLilderio === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Paulo Lildério</p>
              </li>
              <li class="avatar">
                <img
                  src={images.renatoFernandes}
                  alt="Renato Fernandes"
                  style={{
                    filter:
                      users.renatoFernandes === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Renato Fernandes</p>
              </li>
              <li class="avatar">
                <img
                  src={images.tallesLopes}
                  alt="Talles Lopes"
                  style={{
                    filter:
                      users.tallesLopes === true ? "none" : "grayscale(100%)",
                  }}
                />
                <p>Talles Lopes</p>
              </li>
              <li class="avatar">
                <img
                  src={images.viniciusChaves}
                  alt="Vínicius Chaves"
                  style={{
                    filter:
                      users.viniciusChaves === true
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
                <p>Vínicius Chaves</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img src={bannerTop} alt="BBQ" />
        <div className="container">
          <div class="title-event">
            <h2 class="title">Olá Marcelo,</h2>
            <h3>Confirme presença abaixo.</h3>
          </div>
          <div className="formConfirma">
            <span>Insira seu e-mail siasp:</span>
            <input type="text" placeholder="bbq@siasp.com.br" />
            <button type="button">confirmar</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
