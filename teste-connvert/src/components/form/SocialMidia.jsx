import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <div className="social">
      <a
        className="socialPannel"
        target="_blank"
        href="https://www.instagram.com/becomepanda/"
      >
        <FontAwesomeIcon icon={faInstagram} fontSize={30} />
      </a>
      <a
        className="socialPannel"
        target="_blank"
        href="https://www.linkedin.com/in/paulo-ricardo-maciel/"
      >
        <FontAwesomeIcon icon={faLinkedin} fontSize={27} />
      </a>
      <a
        className="socialPannel"
        target="_blank"
        href="https://github.com/BecomePanda"
      >
        <FontAwesomeIcon icon={faGithub} fontSize={28} />
      </a>
      <a className="socialPannel" target="_blank" href="#">
        <FontAwesomeIcon icon={faWhatsapp} fontSize={28} />
      </a>
    </div>
  );
}
