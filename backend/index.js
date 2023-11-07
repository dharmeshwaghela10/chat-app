const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try{
   const г = await axios.put(
       'https://api.chatengine.io/users/',
       {username: username, secret: username, first_name: username},
       {headers: {"private-key": "3171f8c8-5061-4291-9577-f820f8ed83f6"}}
   )
   return res.status(r.status).json(r.data)
}
   catch (e) {
    return res.status(e.response.status).json(e.response.data)
 }


    // 3171f8c8-5061-4291-9577-f820f8ed83f6
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);