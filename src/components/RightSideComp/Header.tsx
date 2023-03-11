import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../../style/rightHandComp/Header.module.css";

export default function Header() {
  const Header = useSelector((state: RootState) => state.personalData);
  return (
    <header style={styles}>
      <main className={styles.name}>
        <h1>{`${Header.name} ${Header.lastName}`}</h1>
      </main>
    </header>
  );
}
