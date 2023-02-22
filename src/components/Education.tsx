import { useSelector, useDispatch } from "react-redux";

import {
  setUniversityName,
  setUniversityCourse,
  setUniversityGrade,
  setUniversityYearOfGraduation,
  setSchoolName,
  setSchoolCourse,
  setSchoolYearOfGraduation,
} from "../redux/education";
import { store, RootState } from "../redux/store";

export default function Education() {
  const education = useSelector((state: RootState) => state.educationData);
  const dispatch = useDispatch();

  function setUniversityNames(e: any) {
    dispatch(setUniversityName(e.currentTarget.value));
  }
  function setUniversityCourses(e: any) {
    dispatch(setUniversityCourse(e.currentTarget.value));
  }
  function setUniversityGrades(e: any) {
    dispatch(setUniversityGrade(e.currentTarget.value));
  }
  function setUniversityyearOfGraduations(e: any) {
    dispatch(setUniversityYearOfGraduation(e.currentTarget.value));
  }

  function setSchoolNames(e: any) {
    dispatch(setSchoolName(e.currentTarget.value));
  }
  function setSchoolCourses(e: any) {
    dispatch(setSchoolCourse(e.currentTarget.value));
  }
  function setSchoolyearOfGraduations(e: any) {
    dispatch(setSchoolYearOfGraduation(e.currentTarget.value));
  }

  return (
    <div>
      <h1>Education </h1>
      <h2>University</h2>
      <form>
        <input
          type="text"
          name="universityNames"
          onChange={setUniversityNames}
        ></input>
        <input name="universityCourse" onChange={setUniversityCourses}></input>
        <input name="universityGrade" onChange={setUniversityGrades}></input>
        <input
          name="yearOfGraduation"
          onChange={setUniversityyearOfGraduations}
        ></input>
      </form>
      <h2>School</h2>
      <form>
        <input name="schoolName" onChange={setSchoolNames}></input>
        <input name="schoolCourse" onChange={setSchoolCourses}></input>
        <input
          name="yearOfGraduation"
          onChange={setSchoolyearOfGraduations}
        ></input>
      </form>
    </div>
  );
}
