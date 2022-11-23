import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

const PDFPage = (props) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  const queryParams = new URLSearchParams(window.location.search)
  const term = queryParams.get("fp");
  //"./../client/public/PDFs/Colleges/Binghamton University /C/L01 - Intro.pdf"
  const path = '.' + term.substring(18); 
  const { pdfDocument, pdfPage } = usePdf({
    file: path,
    page,
    canvasRef,
  });

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default PDFPage;
