import Header from "./RightSideComp/Header";
import "../style/rightHandComp/main.scss";
import styled from "styled-components";
import Contact from "./RightSideComp/Contact";

const Container = styled.div`
  position: fixed;
`;

const RightHandComponent = () => {
  return (
    <Container className="right">
      <div id="content">
        <Header />
        <Contact />
      </div>
    </Container>
  );
};

export default RightHandComponent;
