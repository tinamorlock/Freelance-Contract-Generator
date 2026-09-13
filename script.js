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

    // custom HTML section for additional sections freelancers want covered in the contract
    let customHTML = "";
    if (inputs["customSection1"]) {
        customHTML += `<h2>${inputs["customSection1"]}</h2>`;
        customHTML += `<p>${inputs["customText1"]}</p>`;
    }
    if (inputs["customSection2"]) {
        customHTML += `<h2>${inputs["customSection2"]}</h2>`;
        customHTML += `<p>${inputs["customText2"]}</p>`;
    }
    if (inputs["customSection3"]) {
        customHTML += `<h2>${inputs["customSection3"]}</h2>`;
        customHTML += `<p>${inputs["customText3"]}</p>`;
    }
    if (inputs["customSection4"]) {
        customHTML += `<h2>${inputs["customSection4"]}</h2>`;
        customHTML += `<p>${inputs["customText4"]}</p>`;
    }
    if (inputs["customSection5"]) {
        customHTML += `<h2>${inputs["customSection5"]}</h2>`;
        customHTML += `<p>${inputs["customText5"]}</p>`;
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
            ${customHTML}
            <br><br>
        </div>
    `;

    document.getElementById('contractOutput').innerHTML = contractHTML;

    // hiding elements so the user only sees the contract
    const hideAfterGenerate = [
        "freelanceContractGenerator",
        "contractInput",
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
