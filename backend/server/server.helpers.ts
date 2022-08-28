import { port } from "./server.config.json"
import path from "path"
require("dotenv").config({ path: path.join(__dirname, "../../.env") })

/**
 * Returns build path directory for static files to be rendered for express
 */
export const __buildPath: string = path.join(__dirname, "../../", "/frontend/build")

/**
 * Returns source index.html file path which contains React root
 */
export const __buildIndexHTML: string = path.join(__buildPath, "/index.html")

/**
 * Returns port on which app will be run. Note: heroku server gives us port which it
 * stores in .env file in root directory of whole project, so it has to be extracted
 * by changing dotenv path
 */
export const PORT: string | number = process.env.PORT || port