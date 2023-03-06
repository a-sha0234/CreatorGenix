import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Profile() {
  const Profile = useSelector((state: RootState) => state.personalData);
  return (
    <div>
      <p>{Profile.profileDescription}</p>
    </div>
  );
}
