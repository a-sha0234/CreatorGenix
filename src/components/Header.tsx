import React from "react";
import jsPDF, { HTMLOptions } from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { store, RootState } from "../redux/store";

const Header = () => {
  // const generatePDF = (): void => {
  //   const content = document.getElementById("content");

  //   if (content !== null) {
  //     html2canvas(content, {}).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF({
  //         orientation: "portrait",
  //       });
  //       const imgProps = pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //       pdf.save("download.pdf");
  //     });
  //   } else {
  //     console.error("Could not find content element");
  //   }
  // };

  // const generatePDF = (): void => {
  //   const content = document.getElementById("content");

  //   if (content !== null) {
  //     html2canvas(content, { scale: 2 }).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF({
  //         orientation: "portrait",
  //         unit: "pt",
  //         format: "a4",
  //       });
  //       const imgProps = pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       pdf.addImage(
  //         imgData,
  //         "PNG",
  //         0, // x-coordinate
  //         0, // y-coordinate
  //         pdfWidth, // width
  //         pdfHeight // height
  //       );
  //       pdf.save("download.pdf");
  //     });
  //   } else {
  //     console.error("Could not find content element");
  //   }
  // };

  // function generatePDF() {
  //   const doc = new jsPDF({ unit: "pt" }); // create jsPDF object
  //   const pdfElement: any = document.getElementById("content"); // HTML element to be converted to PDF

  //   doc.html(pdfElement, {
  //     callback: (pdf) => {
  //       pdf.save("MyPdfFile.pdf");
  //     },

  //     // optional: other HTMLOptions
  //   });

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
      <button onClick={handleAutoFill}>AutoFill</button>
      <button onClick={printDocument}>Save</button>
    </>
  );
};

export default Header;
