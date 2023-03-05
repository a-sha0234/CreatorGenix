import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Contact() {
  const contact = useSelector((state: RootState) => state.personalData);
  return (
    <>
      <p>{contact.phoneNumber}</p>
      <p>{contact.email}</p>
      <p>{contact.location}</p>
      <p>{contact.website}</p>
    </>
  );
}
