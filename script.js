function downloadResume() {
  const pdfPath = "resume/khairul-annuar-resume.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "Khairul-Annuar-Resume.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}