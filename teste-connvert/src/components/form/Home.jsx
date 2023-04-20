import React from "react";
import Menu from "./Menu";
import SocialMedia from "./SocialMidia";
import MyPhoto from "../../images/photo.png";
import JediPanda from "../../images/jedi-panda.jpg";

export default function () {
  return (
    <>
      <Menu></Menu>
      <div className="homepage" id="homepage">
        <div className="myPhoto">
          <img src={MyPhoto} />
        </div>

        <div className="myProfile">Paulo Ricardo (Panda/Pandawan)</div>
        <div className="myProfileSub">Front-End Developer</div>
        <SocialMedia />
      </div>

      <div className="about" id="about">
        <img src={JediPanda} />
        <div className="aboutInfo">
          <ul>
            <li>Nome: Paulo Ricardo Maciel Gonçalves</li>
            <li>Idade: 27 Anos</li>
            <li>Data de Nascimento: 12/05/1995</li>
            <li>
              Graduação: Game Designer, Front-End Developer (Em Andamento).
            </li>
            <li>
              Conhecimentos: HTML | CSS | JavaScript | React | TypeScript |
              Redux | UE4 | 3DS MAX | Mudbox.{" "}
            </li>
            <li className="liInfo">
              "Tive meu primeiro contato coma área de programação aos 18 anos,
              por volta de 2013~2014, quando saí do ensino médio e cursei
              Análise e Desenvolvimento de Games no SENAC/SC de Florianópolis.
              Foram dois semestres e acabei abandonando o curso devido a
              problemas familiares. Me formei em Game Design em 2016~2017 e hoje
              em dia, estou procurando voltar a área da qual sempre tive grande
              interesse, primeiramente como desenvolvedor Front-End e
              posteriormente, ampliar meus conhecimentos e experiência para me
              tornar um desenvolvedor full-stack."
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <div className="bottomText">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </div>
        <div className="bottomText2">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</div>
      </div>
    </>
  );
}
