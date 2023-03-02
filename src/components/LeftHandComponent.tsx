import Header from "./Header";
import PersonalData from "./PersonalData";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const LeftHandComponent = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />
      <PersonalData />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
};

export default LeftHandComponent;
