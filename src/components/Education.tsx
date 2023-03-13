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

import styled from "styled-components";
import { RootState } from "../redux/store";
import { Input, Heading, SubHeading } from "../style/styles";

const ContainerUni = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "universityNames" "universityCourse" "universityGrade" "yearOfGraduation";
  row-gap: 5%;
`;
const ContainerSkl = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "schoolName" "schoolCourse" "yearOfGraduation";
  row-gap: 7%;
`;

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
      <Heading>Education </Heading>

      <div
        style={{
          maxWidth: "90%",
          margin: "auto",
          position: "relative",
          bottom: "15px",
        }}
      >
        <SubHeading>University</SubHeading>
        <form>
          <ContainerUni>
            <Input
              type="text"
              name="universityNames"
              onChange={setUniversityNames}
              placeholder="university name"
              gridArea="universityNames"
            ></Input>
            <Input
              name="universityCourse"
              onChange={setUniversityCourses}
              placeholder="course"
              gridArea="universityCourse"
            ></Input>
            <Input
              name="universityGrade"
              onChange={setUniversityGrades}
              placeholder="grade"
              gridArea="universityGrade"
            ></Input>
            <Input
              name="yearOfGraduation"
              onChange={setUniversityyearOfGraduations}
              placeholder="graduation date"
              gridArea="yearOfGraduation"
            ></Input>
          </ContainerUni>
        </form>
        <SubHeading>School</SubHeading>

        <form>
          <ContainerSkl>
            <Input
              name="schoolName"
              onChange={setSchoolNames}
              placeholder="Name of school"
              gridArea="schoolName"
            ></Input>
            <Input
              name="schoolCourse"
              onChange={setSchoolCourses}
              placeholder="courses"
              gridArea="schoolCourse"
            ></Input>
            <Input
              name="yearOfGraduation"
              onChange={setSchoolyearOfGraduations}
              placeholder="finish date"
              gridArea="yearOfGraduation"
            ></Input>
          </ContainerSkl>
        </form>
      </div>
    </div>
  );
}
