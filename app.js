import { app } from "./src/express.js"
import DatabaseService from "./src/service/databaseService.js"

const port = process.env.PORT || 3000;

DatabaseService.connect();

app.listen(port, () => {
    console.log(`Server listening att http://localhost:${port}..`);
})