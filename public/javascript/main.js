const donation = 
{
    id:  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    name: "",
    donor_contact: "",
    donated_item: "",
    donated_amount: 0,
    donated_date: new Date()
}

function clearForm()
{
    document.getElementsByTagName("input").array.forEach(element => {
        element.value = "";
    });
    donationSubmission.id =  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

async function donate()
{
    alert("Submitting Form");
    donation.name = document.getElementById("name").value;
    donation.phoneNumber = document.getElementById("phoneNumber").value;
    donation.itemDonated = document.getElementById("itemDonated").value;
    donation.quantityDonated = document.getElementById("itemQuantity").value;
    alert(donation);
    await fetch('/donationSubmission', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(donation)
    })
    .then(res =>
    {
        console.log(res);
        return res.json();
    })
    .then(data =>
    {
        // console.log('Success:', data);
        alert("Donation submission Successful");
        inputFields = document.getElementsByTagName("input");
        for (let i = 0; i < inputFields.length; i++)
        {
            inputFields[i].value = "";
        }
    })
    .catch(error =>
    {
        console.error('Error:', error);
        alert("Donation submission Failed");
    })
}


function search()
{
    alert("Searching");
    var tableBody = document.getElementById("tableBody");
    var tableEntries = tableBody.children;
    for (let i = 0; i < tableEntries.length; i++)
    {
        tableEntries[i].style.display = "none";
    }
    var searchTerm = document.getElementById("search").value;
    var matchingTerms = document.getElementsByClassName(searchTerm);
    for (let i = 0; i < matchingTerms.length; i++)
    {
        matchingTerms[i].style.display = "table-row";
    }
    document.getElementById("search").value = "";
}

function searchReset()
{
    alert("Resetting");
    var rows = document.getElementsByTagName("tr")
    alert(rows.length)
    for (let i = 0; i < rows.length; i++)
    {
        rows[i].style.display = "table-row";
    }
}