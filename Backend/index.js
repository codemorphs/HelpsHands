const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.post('/login', (req, res)=>{
    const {email, password} = req.body;

    if(email === 'test@gmail.com' && password === 'test'){
        res.json({success: true, message: 'Login success'});
    }else{
        res.json({success: false, message: 'Login failed'});
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
