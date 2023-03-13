import Header from "./Header";
import PersonalData from "./PersonalData";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import styles from "../style/leftHandComp/leftHandComp.module.css";
import styled from "styled-components";
import { Section } from "../style/styles";

const Container = styled.main``;

const LeftHandComponent = () => {
  return (
    <main style={styles}>
      <div className={styles.container}>
        <Container>
          <Section>
            <Header />
          </Section>
          <Section>
            <PersonalData />
          </Section>
          <Section>
            <Education />
          </Section>
          <Section>
            <Experience />
          </Section>
          <Section>
            <Skills />
          </Section>
        </Container>
      </div>
    </main>
  );
};

export default LeftHandComponent;
