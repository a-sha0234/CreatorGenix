import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const contact = useSelector((state: RootState) => state.personalData);
  return (
    <>
      <p>
        <BsFillTelephoneFill />
        {contact.phoneNumber}
      </p>
      <p>
        <AiOutlineMail />
        {contact.email}
      </p>
      <p>
        <GoLocation />
        {contact.location}
      </p>
      <p>
        <AiFillLinkedin />
        {contact.website}
      </p>
    </>
  );
}
