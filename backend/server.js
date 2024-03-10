const server = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Newlogin");
  console.log("db connected");
}

const app = server();

app.use(cors());
app.use(bodyParser.json());

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  address: String,
});

const Userdata = mongoose.model("UserData", UserSchema);

app.post("/login", async (req, res) => {
  const {email , password} = req.body;
  const loginUser = await Userdata.findOne({ email: req.body.email });
  if (loginUser) {
    if (password === loginUser.password) {
      res.send({ message: "login sccuccessfull" });
    } else res.send({message :"password not matched"});
  } else res.send({message :"User not found"});
});

app.post("/register", async (req, res) => {
  const alredyuser = await Userdata.findOne({ email: req.body.email });
  if (alredyuser) {
    res.json({ message: "User already exists" });
  } else {
    const user = new Userdata();
    user.name = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.phone = req.body.phone;
    user.address = req.body.address;
    const doc = await user.save();

    console.log(doc);
    res.json("user added");
  }
});

app.listen(8080, () => {
  // res.send("hello")
  console.log("server started");
});
