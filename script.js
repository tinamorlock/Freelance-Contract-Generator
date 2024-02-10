const Export2Word = (element, filename = '') => {
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + document.getElementById(element).innerHTML + postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Use the blob directly as the href
        downloadLink.href = URL.createObjectURL(blob);

        // Setting the file name
        downloadLink.download = filename ? filename + '.docx' : 'document.docx';

        // Triggering the download
        downloadLink.click();

        // Clean up
        URL.revokeObjectURL(downloadLink.href);
    }

    document.body.removeChild(downloadLink);
}
