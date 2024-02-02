function abrirPDF(nomeDocumento) {
  const urlPDF = nomeDocumento;

  pdfjsLib.getDocument(urlPDF).promise.then(function (pdfDoc) {
    const pageNum = 1;

    // Criar um novo elemento div para o PDF
    const pdfContainer = document.createElement("div");
    pdfContainer.className = "pdf-container";
    document.body.appendChild(pdfContainer);

    pdfDoc.getPage(pageNum).then(function (page) {
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      pdfContainer.appendChild(canvas);

      page.render({ canvasContext: context, viewport: viewport });
    });
  });
}
