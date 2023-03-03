import React from "react";
import jsPDF, { HTMLOptions } from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { store, RootState } from "../redux/store";

const Header = () => {
  const generatePDF = (): void => {
    const content = document.getElementById("content");

    if (content !== null) {
      html2canvas(content, {
        scale: 2,
        useCORS: true,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
        width: content.offsetWidth,
        height: content.offsetHeight,
        allowTaint: true,
      }).then((canvas) => {
        const pdf = new jsPDF("p", "in", "letter");

        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV.pdf");
      });
    } else {
      console.error("Could not find content element");
    }
  };

  function handleAutoFill() {}

  return (
    <>
      <h1>CreatorGenix</h1>
      <p>
        Project by <a href="#">fthrt</a>
      </p>
      <button onClick={handleAutoFill}>AutoFill</button>
      <button onClick={generatePDF}>Save</button>
    </>
  );
};

export default Header;
