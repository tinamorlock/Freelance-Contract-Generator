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
    'paymentPol',
    'confidentialityPol',
    'revisionPol',
    'ipPol',
    'termPol',
];
const genContract = document.querySelector("#generateContract");

const button = document.getElementById("exportPDF");

function generatePDF() {
    // Choose the element that your content will be rendered to.
    const element = document.getElementById("contractDocument");
    // Choose the element and save the PDF for your user.
    html2pdf().from(element).save();
}

const makeContract = () => {
    // grabbing values entered by the end user
    const inputs = {};
    inputArr.forEach(id => {
        inputs[id] = document.getElementById(id).value;
    });

    // data validation

    const requiredFields = [
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
        'projectCost',
        'projectHourly',
        'deliverable1',
        'projectStart',
        'projectEnd',
        'paymentPol',
        'confidentialityPol',
        'revisionPol',
        'ipPol',
        'termPol',
    ];

    for (const id of requiredFields) {
        const field = document.getElementById(id);

        if (field.value.trim() === "") {
            alert("Please complete all required fields.");
            field.focus();
            return;
        }
    }

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
        <div id="contractDocument">
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
            <br>
            <h3>Client</h3>
            <p>Name: ${inputs["clientName"]}</p>
            <p>Address:</p>
            <p>${inputs["clientAddress"]}</p>
            <p>${inputs["clientCityStateZip"]}</p>
            <p>Phone Number: ${inputs["clientPhone"]}</p>
            <p>Email: <a href="mailto:${inputs['clientEmail']}">${inputs["clientEmail"]}</a></p>
            <br>
            <h2>Project Information</h2>
            <p><i>
                ${inputs["projectDescription"]}
                <br>
            </i></p>
            <h3>Services</h3>
            <ul>
                ${servicesHTML}
            </ul>
            <br>
            <h3>Pricing</h3>
            <p>Estimated project fee: $${inputs["projectCost"]}</p>
            <p>Additional work billed at $${inputs["projectHourly"]} per hour.</p>
            <br>
            <h2>Deliverables</h2>
            <ul>
                ${deliverHTML}
            </ul>
            <br>
            <h2>Project Timeline</h2>
            <p>Project Start Date: ${inputs["projectStart"]}</p>
            <p>Project End Date: ${inputs["projectEnd"]}</p>
            <br>
            <h2>Policies</h2>
            <h3>Payment</h3>
            <p><i>${inputs["paymentPol"]}</i></p>
            <br>
            <h3>Confidentiality</h3>
            <p><i>${inputs["confidentialityPol"]}</i></p>
            <br>
            <h3>Revisions</h3>
            <p><i>${inputs["revisionPol"]}</i></p>
            <br>
            <h3>Intellectual Property</h3>
            <p><i>${inputs["ipPol"]}</i></p>
            <br>
            <h3>Termination</h3>
            <p><i>${inputs["termPol"]}</i></p>
            <br><br>
            <h2>Signatures</h2>
            <br>
            <h3>Freelancer</h3>
            <br><br><br>
            <h3>Client</h3>
            <br><br><br>
            <br><br>
        </div>
    `;

    document.getElementById('contractOutput').innerHTML = contractHTML;

    // hiding elements so the user only sees the contract
    const hideAfterGenerate = [
        "freelanceContractGenerator",
        "contractInput",
        "instructions",
    ];

    hideAfterGenerate.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // displaying the export button
    document.getElementById("exportPDF").style.display = "block";
}

// event listeners

genContract.addEventListener('click', makeContract);
button.addEventListener("click", generatePDF);
