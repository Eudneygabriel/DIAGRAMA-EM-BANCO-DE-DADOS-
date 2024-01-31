function abrirPDF(nomeDocumento) {
  const urlPDF = nomeDocumento;

  pdfjsLib.getDocument(urlPDF).promise.then(function (pdfDoc) {
    const pageNum = 1;

    const canvasContainer = document.createElement("div");
    canvasContainer.className = "canvas-container";
    document.body.appendChild(canvasContainer);

    pdfDoc.getPage(pageNum).then(function (page) {
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvasContainer.appendChild(canvas);

      page.render({ canvasContext: context, viewport: viewport });
    });
  });
}
