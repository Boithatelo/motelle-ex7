function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    if (name.trim() !== "" && phone.trim() !== "") {
        var outputDiv = document.getElementById("output");

        
        var contactDiv = document.createElement("div");
        contactDiv.classList.add("contact");

        var personIcon = document.createElement("div");
        personIcon.classList.add("person-icon");
        personIcon.textContent = "👤";

        var contactDetails = document.createElement("div");
        var nameElement = document.createElement("p");
        var phoneElement = document.createElement("p");

        nameElement.textContent = "Name: " + name;
        phoneElement.textContent = "Phone: " + phone;

        contactDetails.appendChild(personIcon);
        contactDetails.appendChild(nameElement);
        contactDetails.appendChild(phoneElement);

        
        contactDiv.appendChild(contactDetails);
        outputDiv.appendChild(contactDiv);

        
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        alert("Please enter both name and phone number.");
    }
}
