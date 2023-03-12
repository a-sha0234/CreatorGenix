import React from "react";
import jsPDF, { HTMLOptions } from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { store, RootState } from "../redux/store";

const Header = () => {
  function printDocument() {
    const input: any = document.getElementById("content");
    html2canvas(input, { scrollX: 0, scrollY: -window.scrollY }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", [
          input.offsetWidth,
          input.offsetHeight,
        ]);

        // Add image to PDF
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          input.offsetWidth,
          input.offsetHeight
        );

        // Download PDF to user
        pdf.save("resume.pdf");
      }
    );
  }

  function handleAutoFill() {}

  return (
    <>
      <h1>CreatorGenix</h1>
      <p>
        Project by <a href="#">fthrt</a>
      </p>
      {/* <button onClick={handleAutoFill}>AutoFill</button> */}
      <button onClick={printDocument}>Save</button>
    </>
  );
};

export default Header;
