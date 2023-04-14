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

      <div className="about" id="test">
        <img src={JediPanda} />
        <div className="aboutInfo">
          <ul>
            <li>Nome: Paulo Ricardo Maciel Gonçalves</li>
            <li>Idade: 27 Anos</li>
            <li>Data de Nascimento: 12/05/1995</li>
            <li>
              Graduação: Game Designer, Front-End Developer (Em Andamento).
            </li>
            <li>Conhecimentos: HTML | CSS | JavaScript | React | TypeScript | Redux | UE4 | 3DS MAX | Mudbox. </li>
          </ul>
        </div>
      </div>
    </>
  );
}
