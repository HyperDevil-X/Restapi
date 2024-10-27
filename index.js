const express = require('express'); //Boilerplate code
const users = require("./MOCK_DATA.json"); //require json file in users

const app = express(); //create instance of express
const PORT = 5000; //port number

app.use(express.urlencoded({ extended: false })); //using middleware (express plugins) 

app.get("/api/users", (request, response) => {
    const body = request.body; //
    console.log("body",body);
    return response.json(users);
}) //for mobile devices

app.get ("/api/users/:id", (request, response) => {
    const id =Number( request.params.id );
    const user = users.find(user => user.id === id);
    return response.json(user);
    }) //getting particular user by id

app.get("/users", (request, response) => {
    const html = `
    <ul>
        ${users.map(user => `
        <li>First Name: ${user.first_name}</li>
        <li>Last Name: ${user.last_name}</li>
        <li>Email: ${user.email}</li>
        <li>Gender: ${user.gender}</li>
        <li>Job Title: ${user.job_title}</li>
        `).join('')}
    </ul>`;
    
    response.send(html); // Send the generated HTML as a response
}) //for PC devices


app.post("/api/users", (request, response) => {
    return response.json({Status:"Pending"});
    }); //create a new user


app.route("/api/users/:id")
    .get((request, response) =>{
        const id =Number(request.params.id);
        const user = users.find (user => user.id === id);
        return response.json(user);
    }) //fetches the user with id

    .patch((request, response) =>{
        return response.json({status : "Pending"});
    }) //edit the user with id

    .delete((request, response) =>{
        return response.json({status : "Pending"});
    }) //delete the user with id
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); //server starting on port 5000
