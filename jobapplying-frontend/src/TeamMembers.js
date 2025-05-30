import TeamMember from "./TeamMember";
//import "./style.css";kullanacagin zaman ac.

const teamMembersData = [
  {
    name: "Chris Coyier",
    description:
      "Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.",
    image:
      "https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120",
    codepenLink: "https://codepen.io/chriscoyier/",
    codepenName: "@chriscoyier",
    isCofunder: true,
  },
  {
    name: "Alex Vazquez",
    description:
      "Alex is a full stack developer. Alex does JavaScript development for CodePen, both front end and back, and just about everything else.",
    image:
      "https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120",
    codepenLink: "https://codepen.io/quezo/",
    codepenName: "@quezo",
    isCofunder: true,
  },
  {
    name: "Marie Mosley",
    description:
      "Marie wears a lot of hats. She is our documentation lead, customer support maestra, editor, and community manager.",
    image:
      "https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120",
    codepenLink: "https://codepen.io/mariemosley/",
    codepenName: "@mariemosley",
    isCofunder: false,
  },
  {
    name: "Stephen Shaw",
    description:
      "Stephen is a designer/developer residing in Houston. He likes to build animations with CSS & JavaScript.",
    image:
      "https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120",
    codepenLink: "https://codepen.io/shshaw/",
    codepenName: "@shshaw",
    isCofunder: false,
  },
];

function TeamMembers() {
  return teamMembersData.map((member) => (
    <TeamMember
      key={member.name} // Bunu ekemezsek React ta key hatasi aliriz. Cunku React Hangi komponenti kullanacaksa oradaki key i bilmek istiyor. Genel de id key oarak kullaniliyor.
      name={member.name}
      description={member.description}
      image={member.image}
      codepenLink={member.codepenLink}
      codepenName={member.codepenName}
      isCofunder={member.isCofunder}
    />
  ));
}

export default TeamMembers;
