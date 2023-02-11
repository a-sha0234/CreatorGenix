import styled from "styled-components";
import SplitScreen from "../components/SplitScreen";
import RightHandComponent from "../components/RightHandComponent";
import LeftHandComponent from "../components/LeftHandComponent";

const Home = () => {
  return (
    <div>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </div>
  );
};

export default Home;
