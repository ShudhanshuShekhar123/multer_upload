const express = require("express")
const server = express()
const  multer  = require('multer')




server.use(express.json())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



server.get("/home", (req, res) => {
   
    res.send("wwelcome to home page")
})


server.post('/profile', upload.single('avatar'), function (req, res, next) {
   
    console.log(req.file)
  })
  


server.listen(8000, () => {
    console.log(`listening at port ${8000}`)
   
})
