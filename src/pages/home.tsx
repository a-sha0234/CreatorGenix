import styled from "styled-components";
import SplitScreen from "../components/SplitScreen";
import RightHandComponent from "../components/RightHandComponent";
import LeftHandComponent from "../components/LeftHandComponent";
import { useState } from "react";
import styles from "../style/pages/home.module.css";

const Home = () => {
  const [preview, setPreview] = useState(false);

  function handlePreview() {
    setPreview((prev) => !prev);
  }

  return (
    <div style={styles}>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>

      <button
        className={preview ? "previewTrue" : "previewFalse"}
        onClick={handlePreview}
      >
        Preview
      </button>
    </div>
  );
};

export default Home;
