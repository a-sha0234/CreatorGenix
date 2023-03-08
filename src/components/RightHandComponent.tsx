import Header from "./RightSideComp/Header";
import Contact from "./RightSideComp/Contact";
import Profile from "./RightSideComp/Profile";
import ProfessionalExp from "./RightSideComp/ProfessionalExp";
import Education from "./RightSideComp/Education";
import Skills from "./RightSideComp/Skills";
// import Right from "./RightSideComp/Right";
import styles from "../style/rightHandComp/rightComponent.module.css";

const RightHandComponent = () => {
  return (
    <div id="content" style={styles}>
      <main className={styles.cv}>
        <section className={styles.cv__content}>
          <article className={styles.header}>
            <Header />
          </article>
          <article className={styles.contact}>
            <Contact />
          </article>
          <article className={styles.profile}>
            <Profile />
          </article>
          <article className={styles.experiance}>
            <ProfessionalExp />
          </article>
          <article className={styles.education}>
            <Education />
          </article>
          <article className={styles.skills}>
            <Skills />
          </article>
          {/* <Right /> */}
        </section>
      </main>
    </div>
  );
};

export default RightHandComponent;
