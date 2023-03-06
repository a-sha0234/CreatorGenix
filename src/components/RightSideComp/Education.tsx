import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Education() {
  const Education = useSelector((state: RootState) => state.educationData);
  return (
    <div>
      <article>
        <p>{Education.university.universityName}</p>
        <p>{Education.university.universityCourse}</p>
        <p>{Education.university.universityGrade}</p>
        <p>{Education.university.yearOfGraduation}</p>
      </article>
      <article>
        <p>{Education.school.schoolName}</p>
        <p>{Education.school.schoolCourse}</p>
        <p>{Education.school.yearOfGraduation}</p>
      </article>
    </div>
  );
}
