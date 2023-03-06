import Header from "./RightSideComp/Header";
// import "../style/rightHandComp/main.scss";
import Contact from "./RightSideComp/Contact";
import Profile from "./RightSideComp/Profile";
import ProfessionalExp from "./RightSideComp/ProfessionalExp";
import Education from "./RightSideComp/Education";
import Skills from "./RightSideComp/Skills";

const RightHandComponent = () => {
  return (
    <div id="content">
      <Header />
      <Contact />
      <Profile />
      <ProfessionalExp />
      <Education />
      <Skills />
    </div>
  );
};

export default RightHandComponent;
