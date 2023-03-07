import Header from "../RightSideComp/Header";
import Contact from "../RightSideComp/Contact";
import Profile from "../RightSideComp/Profile";
import ProfessionalExp from "../RightSideComp/ProfessionalExp";
import Education from "../RightSideComp/Education";
import Skills from "../RightSideComp/Skills";

export default function Right() {
  return (
    <div>
      {" "}
      <Header />
      <Contact />
      <Profile />
      <ProfessionalExp />
      <Education />
      <Skills />
    </div>
  );
}
