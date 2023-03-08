import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Profile() {
  const Profile = useSelector((state: RootState) => state.personalData);
  return (
    <div>
      <h2>Profile</h2>
      <p>{Profile.profileDescription}</p>
    </div>
  );
}
