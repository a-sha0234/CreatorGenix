import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Header() {
  const Header = useSelector((state: RootState) => state.personalData);
  return (
    <header>
      <h1>{`${Header.name} ${Header.lastName}`}</h1>
    </header>
  );
}
