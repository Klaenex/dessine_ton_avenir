import React from "react";

const Footer = () => {
  const antennes = [
    {
      nom: "FCJMP asbl",
      rue: "Rue Saint-Ghislain, 20",
      ville: "1000 - Bruxelles",
    },
    {
      nom: "FCJMP-RW asbl",
      rue: "Rue Sainte Marguerite, 82",
      ville: "4000 - Liège",
    },
  ];

  return (
    <footer>
      <div className="wrapper__separator">
        <span className="separator"></span>
      </div>

      <div className="antennes">
        {antennes.map((antenne, index) => (
          <div className="antenne" key={index}>
            <h3>{antenne.nom}</h3>
            <p>{antenne.rue}</p>
            <p>{antenne.ville}</p>
          </div>
        ))}
      </div>

      <div className="copyright">
        <a href="mailto:infos@fcjmp.be">infos@fcjmp.be</a>
        <br />
        <a href="http://www.fcjmp.be">www.fcjmp.be</a>
        <p>Copyright © Tous droits réservés - FCJMP asbl</p>
      </div>
    </footer>
  );
};

export default Footer;
