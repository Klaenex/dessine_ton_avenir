import React from "react";
import Data from "../data.json";

function Question() {
  // Affichage des questions et réponses
  const displayQuestions = Data.questions.map((questionItem, index) => (
    <div key={index} className="question-item">
      <div className="wrapper wrapper--text">
        <h2 className="title">{questionItem.question}</h2>
        <p>{questionItem.reponse}</p>
      </div>
      <div className="wrapper wrapper--img">
        <img
          src={process.env.PUBLIC_URL + "/images/" + questionItem.image}
          alt={questionItem.image_alt}
        />
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="title title--big">Dessine ton avenir</h2>

      <div className="container">
        <div className="questions-content">{displayQuestions}</div>
      </div>
    </>
  );
}

export default Question;
