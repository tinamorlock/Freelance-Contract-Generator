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
    // grabbing values entered by the end user
    const inputs = {};
    inputArr.forEach(id => {
        inputs[id] = document.getElementById(id).value;
    });

    // services HTML to account for multiple services entered
    // only adds them if entered
    let servicesHTML = "";
    if (inputs.service1) {
        servicesHTML += `<li>${service1}</li>`;
    }
    if (inputs.service2) {
        servicesHTML += `<li>${service2}</li>`;
    }
    if (inputs.service3) {
        servicesHTML += `<li>${service3}</li>`;
    }
    if (inputs.service4) {
        servicesHTML += `<li>${service4}</li>`;
    }
    if (inputs.service5) {
        servicesHTML += `<li>${service5}</li>`;
    }

    // building the full contract
    const contractHTML = `
        <h1>Freelance Services Agreement</h1>
        <p>This agreement is between ${freelancerName}
        and ${clientName}</p>
        <h2>Contact Information</h2>
        <h3>Freelancer</h3>
        <p>Name: ${freelancerName}</p>
        <p>Address:</p>
        <p>${freelancerAddress}</p>
        <p>${freelancerCityStateZip}</p>
        <p>Phone Number: ${freelancerPhone}</p>
        <p>Email: <a href="mailto:${freelancerEmail}">${freelancerEmail}</a></p>
        <h3>Client</h3>
        <p>Name: ${clientName}</p>
        <p>Address:</p>
        <p>${clientAddress}</p>
        <p>${clientCityStateZip}</p>
        <p>Phone Number: ${clientPhone}</p>
        <p>Email: <a href="mailto:${clientEmail}">${clientEmail}</a></p>
        <h2>Project Information</h2>
        <h3>Services</h3>
        <ul>
            ${servicesHTML}
        </ul>
    `;
}

// event listeners

genContract.addEventListener('click', makeContract);
