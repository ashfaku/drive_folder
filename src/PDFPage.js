import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
const PDFPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const queryParams = new URLSearchParams(window.location.search)
  let term = queryParams.get("fp");
  return (
      <Document file={decodeURIComponent(term)} >
        <Page pageNumber={pageNumber} />
      </Document>
  );
};

export default PDFPage;
