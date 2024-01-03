import React from "react";
import Data from "../data.json";

function Question() {
  // Affichage des questions et réponses
  const displayQuestions = Data.questions.map((questionItem, index) => (
    <div key={index} className="question-item">
      <h2>{questionItem.question}</h2>
      <p>{questionItem.reponse}</p>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/" + questionItem.image}
          alt={questionItem.image_alt}
        />
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="questions-content">{displayQuestions}</div>
    </div>
  );
}

export default Question;
