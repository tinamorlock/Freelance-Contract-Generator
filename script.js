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
    if (inputs["service1"]) {
        servicesHTML += `<li>${inputs["service1"]}</li>`;
    }
    if (inputs["service2"]) {
        servicesHTML += `<li>${inputs["service2"]}</li>`;
    }
    if (inputs["service3"]) {
        servicesHTML += `<li>${inputs["service3"]}</li>`;
    }
    if (inputs["service4"]) {
        servicesHTML += `<li>${inputs["service4"]}</li>`;
    }
    if (inputs["service5"]) {
        servicesHTML += `<li>${inputs["service5"]}</li>`;
    }

    // deliverables HTML to account for multiple deliverables
    // only adds them if entered
    let deliverHTML = "";
    if (inputs["deliverable1"]) {
        deliverHTML += `<li>${inputs["deliverable1"]}</li>`;
    }
    if (inputs["deliverable2"]) {
        deliverHTML += `<li>${inputs["deliverable2"]}</li>`;
    }
    if (inputs["deliverable3"]) {
        deliverHTML += `<li>${inputs["deliverable3"]}</li>`;
    }
    if (inputs["deliverable4"]) {
        deliverHTML += `<li>${inputs["deliverable4"]}</li>`;
    }
    if (inputs["deliverable5"]) {
        deliverHTML += `<li>${inputs["deliverable5"]}</li>`;
    }

    // building the full contract
    const contractHTML = `
        <h1>Freelance Services Agreement</h1>
        <p>This agreement is between ${inputs["freelancerName"]}
        and ${inputs["clientName"]}</p>
        <h2>Contact Information</h2>
        <h3>Freelancer</h3>
        <p>Name: ${inputs["freelancerName"]}</p>
        <p>Address:</p>
        <p>${inputs["freelancerAddress"]}</p>
        <p>${inputs["freelancerCityStateZip"]}</p>
        <p>Phone Number: ${inputs["freelancerPhone"]}</p>
        <p>Email: <a href="mailto:${inputs['freelancerEmail']}">${inputs["freelancerEmail"]}</a></p>
        <h3>Client</h3>
        <p>Name: ${inputs["clientName"]}</p>
        <p>Address:</p>
        <p>${inputs["clientAddress"]}</p>
        <p>${inputs["clientCityStateZip"]}</p>
        <p>Phone Number: ${inputs["clientPhone"]}</p>
        <p>Email: <a href="mailto:${inputs['clientEmail']}">${inputs["clientEmail"]}</a></p>
        <h2>Project Information</h2>
        <p><i>
            ${inputs["projectDescription"}
        </i></p>
        <h3>Services</h3>
        <ul>
            ${servicesHTML}
        </ul>
        <h3>Pricing</h3>
        <p>Estimated project fee: $${inputs["projectCost"}</p>
        <p>Additional work billed at $${inputs["projectHourly"]} per hour.</p>
        <h2>Deliverables</h2>
        <ul>
            ${deliverHTML}
        </ul>
    `;

    document.getElementById('contractOutput').innerHTML = contractHTML;
}

// event listeners

genContract.addEventListener('click', makeContract);
