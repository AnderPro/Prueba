const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    const { originalname } = file;
    callback(null,`${uuid()}-${originalname}`);
  }
})

const upload = multer({storage});

const app = express();
app.use(express.static('public'));

app.post("/upload",upload.array('avatar'),(req, res)=>{
  res.json({
    status: 'OK',
    uploaded: req.files.length
  });

});
app.listen(3001, ()=> console.log('App is listening...'));



