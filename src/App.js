import React, { useState, useEffect } from "react";

import images from "./images";
import bannerTop from "./images/BBQ-TOPO.png";
import arrowLeft from "./images/arrowLeft.png";
import api from "./services/api";

import "./styles/styles.css";

function App() {
  function animacao() {
    let W = window.innerWidth;
    let H = window.innerHeight;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const maxConfettis = 200;
    const particles = [];

    const possibleColors = [
      "DodgerBlue",
      "OliveDrab",
      "Gold",
      "Pink",
      "SlateBlue",
      "LightBlue",
      "Gold",
      "Violet",
      "PaleGreen",
      "SteelBlue",
      "SandyBrown",
      "Chocolate",
      "Crimson",
    ];

    function randomFromTo(from, to) {
      return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function confettiParticle() {
      this.x = Math.random() * W; // x
      this.y = Math.random() * H - H; // y
      this.r = randomFromTo(11, 33); // radius
      this.d = Math.random() * maxConfettis + 11;
      this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
      this.tilt = Math.floor(Math.random() * 33) - 11;
      this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
      this.tiltAngle = 0;

      this.draw = function () {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return context.stroke();
      };
    }

    function Draw() {
      const results = [];

      // Magical recursive functional love
      requestAnimationFrame(Draw);

      context.clearRect(0, 0, W, window.innerHeight);

      for (var i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
      }

      let particle = {};
      let remainingFlakes = 0;
      for (var i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        // If a confetti has fluttered out of view,
        // bring it back to above the viewport and let if re-fall.
        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
          particle.x = Math.random() * W;
          particle.y = -30;
          particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
      }

      return results;
    }

    window.addEventListener(
      "resize",
      function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      false
    );

    // Push new confetti objects to `particles[]`
    for (var i = 0; i < maxConfettis; i++) {
      particles.push(new confettiParticle());
    }

    // Initialize
    canvas.width = W;
    canvas.height = H;
    Draw();
  }

  const [email, setEmail] = useState("");
  const [step, setStep] = useState(false);
  const [confirma, setConfirma] = useState(false);
  const [users, setUsers] = useState();
  const [user, setUser] = useState("");

  useEffect(() => {
    async function loadConvidados() {
      try {
        const list = await api.get("/bbq");
        setUsers(list.data);
      } catch {
        console.error();
      }
    }

    loadConvidados();
  }, []);

  async function handleConfirm(e) {
    e.preventDefault();
    const data = { email: email, status: true };
    try {
      const res = await api.put(`/bbq/${user._id}`, data);
      setConfirma(true);
    } catch {
      alert("Algo deu errado!");
    }
  }

  function changeStep(value) {
    if (user === "") {
      setUser(value);
    } else {
      setUser("");
    }
    if (step === true) {
      setStep(false);
    } else {
      setStep(true);
    }
  }

  function separe(value) {
    const nome = value.split(/(?=[A-ZÀ-Ú])/);
    return nome[0] + " " + nome[1];
  }

  if (users === undefined) {
    return (
      <>
        <div className="container">
          <div className="topo">
            <img src={bannerTop} alt="BBQ" />
          </div>
        </div>
        <div className="container"></div>
      </>
    );
  }

  if (step === true && confirma === true) {
    var delay = 500;
    setTimeout(function () {
      {
        animacao();
      }
    }, delay);
    return (
      <>
        <div className="container">
          <div className="topo">
            <img src={bannerTop} alt="BBQ" />
          </div>
          <div className="container">
            <div className="title-event">
              <h2 className="title">
                Top {!user.username ? "" : separe(user.username)}!
              </h2>
              <h3>presença confimada, vai ser pressão...</h3>
            </div>
          </div>
        </div>
        <canvas id="canvas"></canvas>
      </>
    );
  }

  if (step === false && users !== undefined) {
    return (
      <>
        <div className="container">
          <div className="topo">
            <img src={bannerTop} alt="BBQ" />
          </div>
          <div className="container">
            <div className="title-event">
              <h2 className="title">Confirme sua presença abaixo!</h2>
            </div>
            <ul className="listUsers">
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[0])}>
                  <img
                    src={images.adrianaSilva}
                    alt="Adriana Silva"
                    style={{
                      filter:
                        users[0].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Adriana Silva</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[1])}>
                  <img
                    src={images.anaLuisa}
                    alt="Ana Luisa"
                    style={{
                      filter:
                        users[1].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Ana Luisa</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[2])}>
                  <img
                    src={images.chagasJunior}
                    alt="Chagas Júnior"
                    style={{
                      filter:
                        users[2].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Chagas Júnior</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[3])}>
                  <img
                    src={images.claudiaPontes}
                    alt="Cláudia Pontes"
                    style={{
                      filter:
                        users[3].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Cláudia Pontes</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[4])}>
                  <img
                    src={images.danielDouglas}
                    alt="Daniel Douglas"
                    style={{
                      filter:
                        users[4].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Daniel Douglas</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[5])}>
                  <img
                    src={images.emanuelFelipe}
                    alt="Emanuel Felipe"
                    style={{
                      filter:
                        users[5].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Emanuel Felipe</p>
                </button>
              </li>
            </ul>
            <ul className="listUsers">
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[6])}>
                  <img
                    src={images.ernildoPorfirio}
                    alt="Ernildo Porfirio"
                    style={{
                      filter:
                        users[6].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Ernildo Porfirio</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[7])}>
                  <img
                    src={images.felipeFernandes}
                    alt="Felipe Fernandes"
                    style={{
                      filter:
                        users[7].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Felipe Fernandes</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[8])}>
                  <img
                    src={images.ivonzelioLeite}
                    alt="Ivonzélio Leite"
                    style={{
                      filter:
                        users[8].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Ivonzélio Leite</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[9])}>
                  <img
                    src={images.januseMartins}
                    alt="Januse Martins"
                    style={{
                      filter:
                        users[9].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Januse Martins</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[10])}>
                  <img
                    src={images.josieneCampos}
                    alt="Josiene Campos"
                    style={{
                      filter:
                        users[10].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Josiene Campos</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[11])}>
                  <img
                    src={images.keltonBorges}
                    alt="Kelton Borges"
                    style={{
                      filter:
                        users[11].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Kelton Borges</p>
                </button>
              </li>
            </ul>
            <ul className="listUsers">
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[12])}>
                  <img
                    src={images.liviaMayara}
                    alt="Lívia Mayara"
                    style={{
                      filter:
                        users[12].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Lívia Mayara</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[13])}>
                  <img
                    src={images.lucasLima}
                    alt="Lucas Lima"
                    style={{
                      filter:
                        users[13].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Lucas Lima</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[14])}>
                  <img
                    src={images.luizFelipe}
                    alt="Luiz Felipe"
                    style={{
                      filter:
                        users[14].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Luiz Felipe</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[15])}>
                  <img
                    src={images.marceloHenrique}
                    alt="Marcelo Henrique"
                    style={{
                      filter:
                        users[15].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Marcelo Henrique</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[16])}>
                  <img
                    src={images.mateusPorfirio}
                    alt="Mateus Porfirio"
                    style={{
                      filter:
                        users[16].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Mateus Porfirio</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[17])}>
                  <img
                    src={images.maxEmiliano}
                    alt="Max Emiliano"
                    style={{
                      filter:
                        users[17].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Max Emiliano</p>
                </button>
              </li>
            </ul>
            <ul className="listUsers">
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[18])}>
                  <img
                    src={images.pauloLilderio}
                    alt="Paulo Lildério"
                    style={{
                      filter:
                        users[18].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Paulo Lildério</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[19])}>
                  <img
                    src={images.renatoFernandes}
                    alt="Renato Fernandes"
                    style={{
                      filter:
                        users[19].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Renato Fernandes</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[20])}>
                  <img
                    src={images.tallesLopes}
                    alt="Talles Lopes"
                    style={{
                      filter:
                        users[20].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Talles Lopes</p>
                </button>
              </li>
              <li className="avatar">
                <button type="button" onClick={(e) => changeStep(users[21])}>
                  <img
                    src={images.viniciusChaves}
                    alt="Vínicius Chaves"
                    style={{
                      filter:
                        users[21].status === true ? "none" : "grayscale(100%)",
                    }}
                  />
                  <p>Vínicius Chaves</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="topo">
          <img src={bannerTop} alt="BBQ" />
        </div>
        <div className="container">
          <div className="title-event">
            <h2 className="title">
              Olá {!user.username ? "" : separe(user.username)},
            </h2>
            <h3>Confirme presença abaixo.</h3>
          </div>
          <div className="formConfirma">
            <span>Insira seu e-mail siasp:</span>
            <input
              type="text"
              placeholder="bbq@siasp.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              onClick={handleConfirm}
              disabled={user.email !== "" ? true : false}
            >
              confirmar
            </button>
            <button className="backLeft" onClick={changeStep}>
              <img src={arrowLeft} alt="Voltar" />
              Voltar
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
