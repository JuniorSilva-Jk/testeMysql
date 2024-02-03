import { connection } from "../database/db.js";

const buscar = async (req, res) => {
    try {
        const [results, fields] = await connection.query(
            "SELECT id, nome, email FROM usuarios"
        );
        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}

export { buscar }