import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setLastName,
  setLocation,
  setName,
  setPhoneNumber,
  setProfileDescription,
  setWebsite,
} from "../redux/personalData";
import { RootState } from "../redux/store";
import { Input, Heading, TextArea } from "../style/styles";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 6fr;
  column-gap: 3%;
  row-gap: 5%;
  grid-template-areas: "name lastName" "location location" "website website" "email phoneNumber" "profileDescription profileDescription";
`;

const PersonalData = () => {
  const count = useSelector((state: RootState) => state.personalData);
  const dispatch = useDispatch();

  function handleNameChange(e: any) {
    dispatch(setName(e.currentTarget.value));
  }
  function handleLastNameChange(e: any) {
    dispatch(setLastName(e.currentTarget.value));
  }

  function handleLocationChange(e: any) {
    dispatch(setLocation(e.currentTarget.value));
  }

  function handleWebsiteChange(e: any) {
    dispatch(setWebsite(e.currentTarget.value));
  }

  function handleEmailChange(e: any) {
    dispatch(setEmail(e.currentTarget.value));
  }

  function handlePhoneNumberChange(e: any) {
    dispatch(setPhoneNumber(e.currentTarget.value));
  }

  function handleProfileChange(e: any) {
    dispatch(setProfileDescription(e.currentTarget.value));
  }

  return (
    <>
      <Heading>Personal Data</Heading>

      <form>
        {/* make div into styled component  */}
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
              type="text"
              name="name"
              onChange={handleNameChange}
              placeholder="john"
              gridArea="name"
            ></Input>
            <Input
              type="text"
              name="lastName"
              onChange={handleLastNameChange}
              placeholder="ie: Doe"
              gridArea="lastName"
            ></Input>
            <Input
              type="text"
              name="location"
              onChange={handleLocationChange}
              placeholder="ie Paris"
              gridArea="location"
            ></Input>
            <Input
              type="text"
              name="website"
              onChange={handleWebsiteChange}
              placeholder="website"
              gridArea="website"
            ></Input>
            <Input
              type="email"
              name="email"
              onChange={handleEmailChange}
              placeholder="ie: johnDoe@hotmail.com"
              gridArea="email"
            ></Input>
            <Input
              type="number"
              name="phoneNumber"
              onChange={handlePhoneNumberChange}
              placeholder="ie: 09390434510"
              gridArea="phoneNumber"
            ></Input>
            <TextArea
              name="profileDescription"
              onChange={handleProfileChange}
              placeholder="description"
              style={{ resize: "none", overflowY: "scroll" }}
              rows={12}
              gridArea="profileDescription"
            ></TextArea>
          </Container>
        </div>
      </form>
    </>
  );
};

export default PersonalData;
