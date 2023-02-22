import Header from "./Header";
import PersonalData from "./PersonalData";
import Education from "./Education";
import Experience from "./Experience";

const LeftHandComponent = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />
      <PersonalData />
      <Education />
      <Experience />
    </div>
  );
};

export default LeftHandComponent;
