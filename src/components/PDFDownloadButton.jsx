import React from "react";

const PDFDownloadButton = () => {
  const handleDownload = () => {
    // Create a function to handle the download action
    // This could be a server request to generate the PDF or a direct link to a static PDF file
    // For the sake of this example, let's assume the PDF file already exists and we're linking to it
    const link = document.createElement("a");
    link.href = "/src/assets/matthewraymondcv-5d7b6074.pdf";
    link.download = "Matthew Raymond CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="flex items-center text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-3 px-8 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Download My CV</span>
    </button>
  );
};

export default PDFDownloadButton;
