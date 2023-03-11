import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../../style/rightHandComp/Experience.module.css";

export default function ProfessionalExp() {
  const Experiance = useSelector((state: RootState) => state.experienceData);

  return (
    <main style={styles}>
      <div className={styles.experience}>
        <h2>Professional experience</h2>
        {Experiance.form.map((data) => {
          return (
            <article>
              <p>{data.companyName}</p>
              <p>{data.position}</p>
              <p>{data.startDate}</p>
              <p>{data.endDate}</p>
              <p>{data.responsibilities}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}
