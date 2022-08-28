import express, { static as Static } from "express"
import { PORT, __buildIndexHTML, __buildPath } from "./server.helpers"

const app = express()
app.use(Static(__buildPath))
// div
app.get("*", (req, res) => {
  res.sendFile(__buildIndexHTML)
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))