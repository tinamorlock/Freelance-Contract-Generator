const inputArr = [
    'freelancerName',
    'freelancerAddress',
    'freelancerCityStateZip',
    'freelancerEmail',
    'freelancerPhone',
    'clientName',
    'clientAddress',
    'clientCityStateZip',
    'clientEmail',
    'clientPhone',
    'projectDescription',
    'service1',
    'service2',
    'service3',
    'service4',
    'service5',
    'projectCost',
    'projectHourly',
    'deliverable1',
    'deliverable2',
    'deliverable3',
    'deliverable4',
    'deliverable5',
    'projectStart',
    'projectEnd',
    'customSection1',
    'customText1',
    'customSection2',
    'customText2',
    'customSection3',
    'customText3',
    'customSection4',
    'customText4',
    'customSection5',
    'customText5',
];
const genContract = document.querySelector('#generateContract');

const export2Word = (element, filename = '') => {
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

const makeContract = () => {
    // enter code for displaying contract on page
}

// event listeners

genContract.addEventListener('click', makeContract);
