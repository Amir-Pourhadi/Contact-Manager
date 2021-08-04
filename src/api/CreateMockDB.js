const { writeFile } = require("fs");
const { v4: uuidv4 } = require("uuid");
const contacts = require("./FakeContacts.json");

contacts.map((contact) => (contact.id = uuidv4()));
const data = JSON.stringify({ contacts });

writeFile("MockDB.json", data, (err) => {
	err ? console.log(err) : console.log("Mock DB created.");
});
