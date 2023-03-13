import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, deleteForm } from "../../redux/experience";
import { store, RootState } from "../../redux/store";
import { useState, useEffect } from "react";
import { Input, TextArea, Button } from "../../style/styles";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 5fr 1fr;
  column-gap: 3%;
  row-gap: 5%;
  grid-template-areas: "companyName companyName" "position position" "responsibilities responsibilities" "startDate endDate";
`;

interface Iprops {
  formkey: number;
  data: any;
}

const ExperienceForm: React.FC<Iprops> = ({ formkey, data }) => {
  const dispatch = useDispatch();
  const experiences = useSelector((state: RootState) => state.experienceData);

  function handleChange(e: any) {
    dispatch(
      updateForm({
        id: data.uuid,
        value: e.currentTarget.value,
        field: e.currentTarget.name,
      })
    );
  }

  console.log(formkey);

  function handleDelete(e: any) {
    console.log(data.uuid);

    dispatch(deleteForm(data.uuid));
  }

  return (
    <div>
      <form>
        <div
          style={{
            maxWidth: "90%",
            margin: "auto",
            position: "relative",
            bottom: "10px",
          }}
        >
          <Container>
            <Input
              onChange={handleChange}
              name="companyName"
              value={experiences.form[formkey].companyName}
              placeholder="company name"
              gridArea="companyName"
            ></Input>
            <Input
              onChange={handleChange}
              name="position"
              value={experiences.form[formkey].position}
              placeholder="job title"
              gridArea="position"
            ></Input>
            <TextArea
              onChange={handleChange}
              name="responsibilities"
              value={experiences.form[formkey].responsibilities}
              placeholder="responsibilites"
              gridArea="responsibilities"
              style={{ resize: "none", overflowY: "scroll" }}
            ></TextArea>
            <Input
              onChange={handleChange}
              name="startDate"
              value={experiences.form[formkey].startDate}
              placeholder="start data"
              gridArea="startDate"
            ></Input>
            <Input
              onChange={handleChange}
              name="endDate"
              value={experiences.form[formkey].endDate}
              placeholder="end date"
              gridArea="endDate"
            ></Input>
          </Container>
        </div>
      </form>

      <Button onClick={handleDelete} id={`${data.uuid}`}>
        Delete
      </Button>
    </div>
  );
};

export default ExperienceForm;
