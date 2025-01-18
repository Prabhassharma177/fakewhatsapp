const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
 .then(() => { 
   console.log("connection sucessfull");
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let chats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me the exam notes",
        created_at: new Date()
    },
    {
        from: "thor",
        to: "loki",
        msg: "I am the king of sgard",
        created_at: new Date()
       
    },
    {
        from: "peter",
        to: "nebula",
        msg: "Gardian of the glaxy",
        created_at: new Date()
    },
    {
      from: "tony",
      to: "peter",
      msg: "love you 3000",
      created_at: new Date()
  },
  {
    from: "hana",
    to: "clay",
    msg: "13 reason why",
    created_at: new Date()
}
]

Chat.insertMany(chats)
.then( (res) => {
  console.log(res);
})
.catch( (err) => {
  console.log(err);
})