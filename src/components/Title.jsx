// src/components/Title.jsx
import React from "react";
import "./Title.css"; // Certifique-se de que o CSS para o Title está correto

const Title = () => {
  return (
    <div className="title-container">
      <p className="subheading">The crypto wallet that’ll take you places</p>
      <h1 className="main-title">
      Your
        <img
          src="https://cdn.discordapp.com/attachments/972209106691710996/1313721286878560256/meu-gato-C3A9-praticamente-o-gato-do-meme-v0-n9dleoj8dgfc1.png?ex=675129ca&is=674fd84a&hm=d074449c809edfde3b24ceb29fddc66033f8b736a3608c9799289149600286a1"
          alt="Gato meme"
          className="image"
        />
        trusted
        <br />
        companion
      </h1>
    </div>
  );
};

export default Title;
