const express=require('express')
const cors=require('cors')
const app=express();
app.use(cors());
app.use(express.json())

app.post('/num',async(req,res)=>{
    var num=req.body.Num;
    var numStr = num.toString();
    console.log(numStr);
    var digits = numStr.split('').map(char => parseInt(char, 10));
    var sum1=0;
    for(var i=0;i<digits.length;i++){
        sum1+=digits[i]*2;
    }
    res.send({sum:sum1});
    console.log(sum1);
})

const port=5000;
app.listen(port,()=>{
    console.log(`Server listening to port ${port}`);
})