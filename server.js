const express=require('express')
const cors=require('cors')
const app=express();
app.use(cors())
app.use(express.json())

app.post("/sort",async(req,res) => {
    var arr=req.body.array;
    console.log(arr.length);
    console.log(arr);

    // Ensure the array is sorted as numbers
    arr.sort((a, b) => a - b);

    res.send({Arr:arr});
    console.log(arr);

});

const port  = process.env.PORT || 5600
app.listen(port,()=>{
    console.log(`listning on port ${port}`)
})