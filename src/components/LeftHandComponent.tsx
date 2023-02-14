import Header from "./Header";
import PersonalData from "./PersonalData";

const LeftHandComponent = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />
      <PersonalData />
    </div>
  );
};

export default LeftHandComponent;
