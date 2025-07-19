

const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p> Gracias por su comando</p>
</div>
`;

// Vamos a hacer que este console.log esté en el archivo app.js
console.log(emailTemplate);


module.exports = {
    emailTemplate
}