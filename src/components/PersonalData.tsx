import React from "react";
import { useState } from "react";
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
import { store, RootState } from "../redux/store";

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
      <h1>Personal Data</h1>

      <form>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          placeholder="john"
        ></input>
        <input
          type="text"
          name="lastName"
          onChange={handleLastNameChange}
          placeholder="ie: Doe"
        ></input>
        <input
          type="text"
          name="location"
          onChange={handleLocationChange}
          placeholder="ie Paris"
        ></input>
        <input
          type="text"
          name="website"
          onChange={handleWebsiteChange}
          placeholder="website"
        ></input>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="ie: johnDoe@hotmail.com"
        ></input>
        <input
          type="number"
          name="phoneNumber"
          onChange={handlePhoneNumberChange}
          placeholder="ie: 09390434510"
        ></input>
        <textarea
          name=" profileDescription"
          onChange={handleProfileChange}
          placeholder="description"
          style={{ resize: "none", overflowY: "scroll" }}
        ></textarea>
      </form>
    </>
  );
};

export default PersonalData;
