import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import styles from "../../style/rightHandComp/Contact.module.css";

export default function Contact() {
  const contact = useSelector((state: RootState) => state.personalData);
  return (
    <main style={styles}>
      <ul className={styles.list}>
        <li>
          <BsFillTelephoneFill />
          {contact.phoneNumber}
        </li>
        <li>
          <AiOutlineMail />
          {contact.email}
        </li>
        <li>
          <GoLocation />
          {contact.location}
        </li>
        <li>
          <AiFillLinkedin />
          {contact.website}
        </li>
      </ul>
    </main>
  );
}
