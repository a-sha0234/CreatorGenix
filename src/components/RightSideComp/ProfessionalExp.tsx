import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function ProfessionalExp() {
  const Experiance = useSelector((state: RootState) => state.experienceData);

  return (
    <div>
      {Experiance.form.map((data) => {
        return (
          <div>
            <p>{data.companyName}</p>
            <p>{data.position}</p>
            <p>{data.startDate}</p>
            <p>{data.endDate}</p>
            <p>{data.responsibilities}</p>
          </div>
        );
      })}
    </div>
  );
}
