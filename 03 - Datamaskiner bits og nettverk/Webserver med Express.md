# Hvordan sette opp en webserver med Node.js og Express

1. Installer Node.js

   Dette har du sikkert allerede gjort, men hvis ikke: Last ned Node.js from https://nodejs.org/.

2. Lag en mappe for prosjektet ditt

   Bruk terminal-verktøyet (cmd) og navigér til der hvor prosjektet ditt skal ligge. Opprett en mappe ved å skrive:

   👉 Du erstatter naturligvis `prosjektnavn` med hva prosjektet ditt faktisk heter

   ```
   md prosjektnavn
   cd prosjektnavn
   ```

3. Sett opp et tomt node-prosjektet

   Kjør denne kommandoen for å få et default node-prosjekt inkludert en `package.json` fil

   ```
   npm init -y
   ```

4. Installer Express

   Kjør følgende kommando for å installere Express og Nodemon:

   ```
   npm install express nodemon --save
   ```

5. Opprett fil som skal holde server-koden

   Lag en ny fil i prosjektmappa som heter `index.js`

6. Skriv server-koden

   Åpne `index.js` i VS Code og legg til denne koden:

   ```js
   const express = require("express")
   const app = express()
   const PORT = 3000

   app.listen(PORT, () => {
     console.log(`Server is up and running on port ${PORT}`)
   })

   app.get("/", (request, response) => {
     response.send("Hello, world!")
   })

   app.get("/ping", (request, response) => {
     response.send("pong")
   })
   ```

7. Legg til en start-kommando

   Åpne `package.json` i VS Code og endre denne slik at det som står i "scripts" ser slik ut:

   ```json
   "scripts": {
      "start": "nodemon index.js"
   }
   ```

8. Start serveren

   I terminalen, skriv:

   ```
   npm start
   ```

9. Test serveren

   Åpne nettleseren og gå til http://localhost:3000. Da burde du se: "Hello, world!". På endpointet http://localhost:3000/ping skal du få "pong" tilbake.
