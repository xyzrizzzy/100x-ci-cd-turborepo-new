import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not defined in the .env file")
}
console.log(__dirname);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "LOADED" : "MISSING");

const adapter = new PrismaNeon({
    connectionString
})
const prisma = new PrismaClient({ adapter });

export default prisma;