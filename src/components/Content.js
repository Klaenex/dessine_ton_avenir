import React, { useState } from "react";

const Content = () => {
  const [isOpen, setIsOpen] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
  });
  const toggleSection = (section) => {
    setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };

  return (
    <main>
      <h2 className="title title--big">
        Redessinons ensemble les contours d’une politique de jeunesse
      </h2>
      <p>
        Cette note s’adresse tant aux décideurs qu’aux partenaires du secteur
        jeunesse. Elle ambitionne d’apporter une contribution substantielle aux
        prochaines Déclarations de politique communautaire ou régionales en
        matière de jeunesse et de nourrir une concertation avec les acteurs du
        secteur qui permettra le développement d’une politique de jeunesse
        ambitieuse.
      </p>
      <p>
        Dans ce cadre, la Fédération des Centres de Jeunes en Milieu Populaire
        rappelle sa volonté de voir émerger une politique de jeunesse globale et
        coordonnée articulant les politiques des Centres de Jeunes et des
        Organisations de Jeunesse avec d’autres politiques concernant les jeunes
        en concertation avec les Régions wallonne et de Bruxelles-Capitale.
      </p>
      <p>
        Cette note propose d’aborder 7 enjeux déclinés en 40 propositions
        concrètes susceptibles d’être approfondies et concertées.
      </p>
      <section
        className={`section ${
          isOpen.section1 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section1 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section1")}>
            I. En termes d’évolutions institutionnelles.
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section1 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Pour la F.C.J.M.P., appréhender les évolutions possibles de l’espace
            francophone, c’est nécessairement aborder la complémentarité « des »
            politiques de jeunesse développées en articulant les initiatives en
            ce sens en concertation avec les Régions wallonne et de
            Bruxelles-Capitale. Réaffirmer la nécessité d’une politique
            coordonnée de jeunesse, c’est également rappeler les multiples
            initiatives en la matière des régions, de la Cocof ou des provinces.
          </p>
          <p>
            En tout état de cause, la FCJMP plaide pour que les évolutions
            institutionnelles ne soient pas réfléchies à moitié sous la forme
            d’une grande braderie porteuse d’incohérences et d’absence
            d’ambition pour la politique de jeunesse.
          </p>
          <p>
            Il s’agit en effet de réaffirmer la nécessité de ne pas perdre de
            vue les articulations nécessaires avec notamment les enjeux de la
            cohésion sociale et de la famille afin de permettre la mise en œuvre
            d’une politique de jeunesse ambitieuse dans le cadre d’une évolution
            institutionnelle qui le soi ad minima autant.
          </p>
        </div>
      </section>

      <section
        className={`section ${
          isOpen.section2 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section2 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section2")}>
            II. En termes d’identité.
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section2 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Considérant l’importance des actions développées par les Centres de
            Jeunes avec les jeunes, la F.C.J.M.P. réaffirme sa volonté de
            maintenir l’action des Centres de jeunes dans le cadre d’une
            politique de jeunesse communautaire ou régionale disposant d’un
            cadre décrétal ambitieus prenant en compte, notamment :
          </p>
          <ul className="list">
            <li>
              1. l’ancrage territorial des associations (urbain, semi urbain,
              rural)
            </li>
            <li>
              2. l’autonomie des initiatives locales fondées sur la liberté
              d’association
            </li>
            <li>
              3. l’égalité de traitement des initiatives de jeunesse au regard
              du cadre réglementaire et des subventions
            </li>
            <li>
              4. la prise en compte de l’évolution des pratiques liées à
              l’accueil et la nécessité d'adaptation aux différents situations
              vécues par les équipes pédagogiques et les jeunes
            </li>
            <li>
              5. la nécessité de faire évoluer les modes de participation des
              jeunes et de gestion des associations avec plus de souplesse et
              d’autonomie en prenant en compte les enjeux des jeunes de la zone
              d’action.
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`section ${
          isOpen.section3 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section3 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section3")}>
            III. En termes de professionnalisation et de simplification
            administrative.
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section3 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Au regard de la diversité des parcours, il est important de
            renforcer la politique de formation des membres, des volontaires et
            des jeunes en prenant en compte les enjeux de professionnalisation
            du secteur eu égard à l’augmentation démesurée des tâches
            administratives et de gestion.
          </p>
          <p>
            Sur cette base, le développement des associations et des initiatives
            des jeunes devra se fonder sur des principes de confiance à priori
            permettant une réelle implication administrative, tels que :
          </p>
          <ul className="list">
            <li>
              1. Suppression des cadres réglementaires fondés sur des principes
              de méfiance portant atteinte à la bonne gouvernance des
              associations et des initiatives de jeunesse (sur base du principe
              de proportionnalité qui rend énergivore voire inutile le fait
              d’imposer de chercher des aiguilles dans des bottes de foin).
            </li>
            <li>
              2. Suppression des doubles demandes administratives (sur base du
              principe que ce qui existe déjà au niveau de l’état doit y être
              introduit une seule fois)
            </li>
            <li>
              3. Identification décrétale de critères et d’indicateurs
              exhaustifs (sur base du principe que ce qui est demandé par une
              administration doit être prévu par le cadre décrétal et que le
              bénéficiaire doit en être informé préalablement)
            </li>
            <li>
              4. Exonération des trop nombreuses taxes auxquels sont soumis les
              structures et qui grèvent leurs moyens d’action au bénéfice des
              jeunes : droits d’auteurs, droits voisins, taxes compensatoires,
              taxes sur les asbl, …
            </li>
            <li>
              5. Simplification des dossiers d’agrément (en en limitant
              l’ampleur et le nombre de page)
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`section ${
          isOpen.section4 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section4 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section4")}>
            IV. En termes d’emploi.
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section4 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Les Centres de Jeunes sont actuellement confrontés à des difficultés
            grandissantes pour assurer leurs missions compte tenu des ressources
            humaines dont ils disposent. Les approches pratiques du travail et
            le fonctionnement interne des Centres de Jeunes varient selon les
            types, les implantations, les demandes des jeunes et les démarches
            pour y répondre mais les enjeux en matière d’emploi s’expriment de
            façon très homogène :
          </p>
          <ul className="list">
            <li>1. financement à 100% de l’emploi des CJ</li>
            <li>2. prise en compte et financement de l’ancienneté</li>
            <li>
              3. prise en compte et financement des heures inconfortables
              (soirées, nuits, séjours, …)
            </li>
            <li>
              4. co-financement des emplois financés par divers pouvoirs publics
              (APE, ACS, Maribel, …)
            </li>
            <li>
              5. le maintien du niveau de l’emploi pour l’ensemble du non
              marchand ;
            </li>
            <li>
              6. l’indexation des subventions emploi permettant de couvrir le
              coût des indexations des rémunérations ;
            </li>
            <li>
              7. le maintien d’une justification simple des subventions qui
              permet de globaliser les charges ainsi qu’une communication claire
              aux employeurs en la matière et une sécurité juridique et
              financière qui autorise la planification budgétaire dans les
              associations ;
            </li>
            <li>
              8. le maintien et le renforcement des dispositifs APE et ACS{" "}
            </li>
            <li>
              9. le financement des permanents visés par l’article 44 G du
              décret du 20/07/2000
            </li>
            <li>
              10. le soutien de dispositifs de mise à l’emploi des jeunes comme
              priorité absolue à travers la Garantie jeunesse
            </li>
            <li>
              11. l'adaptation des budgets de fonctionnement en fonction de la
              taille des équipes
            </li>
            <li>
              12. le financement du permanent dispositif particulier à hauteur
              d’un temps plein minimum
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`section ${
          isOpen.section5 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section5 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section5")}>
            V. En termes d’équipement et d’infrastructure
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section5 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Sans équipement complet minimal ni infrastructure décente, un Centre
            de Jeunes ne peut remplir ses missions de manières professionnelle
            et optimale :
          </p>
          <ul className="list">
            <li>1. Mise en conformité des locaux</li>
            <li>
              2. soutien pour des locaux accueillants disposant d’un mobilier
              renouvellé
            </li>
            <li>
              3. prise en compte de l’évolution des communications et de
              l’utilisation des NTIC … qui épuisent directement les moyens mis à
              disposition. La dernière mise à niveau date de 2000.
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`section ${
          isOpen.section6 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section6 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section6")}>
            VI. En termes d'approche associative (directive service, charte
            associative, travail en réseaux, soutien aux partenariats, …)
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section6 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            L'évolution des Centres de Jeunes et de leurs actions doit pouvoir
            prendre en compte de nombreux changements liés aux besoins des
            jeunes ou à la vie associative elle-même. Cette réalité nécessité un
            renforcement de la collaboration entre les Administrations et les
            Fédérations afin d'avoir un rôle de prévention et d'accompagnement
            qui soutient les initiatives et non pas de sanction qui limite
            elle-même l’impact de l’action publique.
          </p>
          <ul className="list">
            <li>
              1. Réaffirmation d’un enjeu de service aux publics face à la
              directive Bolkestein
            </li>
            <li>
              2. Mise en place de formations communes pour les acteurs
              associatifs et les interlocuteurs des administrations
            </li>
            <li>3. Soutien des pratiques de partenariats entre associations</li>
            <li>
              4. Reconnaissance et développement de groupements d’employeurs
              dans le cadre décrétal de la politique de jeunesse
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`section ${
          isOpen.section7 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section7 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section7")}>
            VII. En termes de communication et de visibilité du secteur des CJ
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section7 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Le regard porté sur la jeunesse est en constante évolution. Avec un
            réseau associatif implanté dans de nombreuses communes wallonnes et
            bruxelloises, le secteur des Centres de Jeunes se veut le reflet des
            réalités des jeunes au travers d’une diversité d’initiatives,
            d’activités et de projets.
          </p>
          <p>
            En association avec les maisons de jeunes, leurs fédérations et
            l’administration, le développement d’outils internet se présente
            comme un enjeu incontournable permettant de renforcer
            l’accessibilité des maisons de jeunes, à travers :
          </p>
          <ul className="list">
            <li>
              1. La réalisation d’un site internet « maisonsdejeunes.be ».
            </li>
            <li>
              2. La présentation de fiches d’identités des Maisons de Jeunes sur
              base de leur ancrage géographique
            </li>
            <li>
              3. La construction d’une base de données des activités proposées
              par les différentes structures
            </li>
            <li>
              4. Le développement d’outils favorisant la communication et les
              échanges entre les jeunes et les associations
            </li>
            <li>
              5. La mise en valeurs des projets des jeunes au travers de
              supports média vidéo et autres
            </li>
            <li>
              6. La mise en réseau avec d’autres média tels que les télévisions
              communautaires ou une nouvelle chaîne « jeunes » de la RTBF.
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`section ${
          isOpen.section8 ? "section--open" : "section--closed"
        }`}
      >
        <div className="wrapper--title">
          <span className={`chevron ${isOpen.section1 ? "up" : "down"}`}></span>
          <h3 className="title" onClick={() => toggleSection("section8")}>
            VIII. En termes de moyens financiers du secteur des CJ
          </h3>
        </div>

        <div
          className={`content ${
            isOpen.section8 ? "content--open" : "content--closed"
          }`}
        >
          <p>
            Face aux enjeux de la jeunesse, il est indispensable de définir un
            plan stratégique financier pour les dix prochaines années à venir
            tenant compte d’une réelle évolution sectorielle bloquée
            actuellement que ce soit au niveau des agréments des dispositifs
            principaux, des dispositifs particuliers et annexes telles que la
            circulaire « soutien aux projets jeunes », infrastructure et autres.
          </p>
          <p>
            La Fédération des Centres de Jeunes en Milieu Populaire ambitionne
            ainsi de voir émerger une politique de jeunesse ambitieuse
            articulant les politiques des Centres de Jeunes et des Organisations
            de Jeunesse avec d’autres politiques concernant les jeunes en
            concertation avec les Régions wallonne et de Bruxelles-Capitale.
          </p>
          <p>
            À la veille des élections communales, régionales, fédérale et
            européenne, la FCJMP se tient à disposition des futurs mandataires
            et représentants de la société civile afin d’approfondir ces
            questions et d'engager rapidement les chantiers relatifs à
            l’ensemble de ces points.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Content;
