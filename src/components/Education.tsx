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
          placeholder="university name"
        ></input>
        <input
          name="universityCourse"
          onChange={setUniversityCourses}
          placeholder="course"
        ></input>
        <input
          name="universityGrade"
          onChange={setUniversityGrades}
          placeholder="grade"
        ></input>
        <input
          name="yearOfGraduation"
          onChange={setUniversityyearOfGraduations}
          placeholder="graduation date"
        ></input>
      </form>
      <h2>School</h2>
      <form>
        <input
          name="schoolName"
          onChange={setSchoolNames}
          placeholder="Name of school"
        ></input>
        <input
          name="schoolCourse"
          onChange={setSchoolCourses}
          placeholder="courses"
        ></input>
        <input
          name="yearOfGraduation"
          onChange={setSchoolyearOfGraduations}
          placeholder="finish date"
        ></input>
      </form>
    </div>
  );
}
