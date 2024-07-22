import axios from 'axios';
import {React,useState} from 'react'

const Prob2 = () => {
    const[num,setNum]=useState('');
    const[val,setVal]=useState();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:5000/num',{Num:num});
            setVal(response.data.sum);
            console.log(val);
        }
        catch(e){
            console.log("error");
        }

    }
  return (
    <div>
        <h1>Add & Multiply</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Number" value={num} onChange={(e)=>{
                setNum(e.target.value)
            }}/>
            <button type="submit">Submit</button>

        </form>
        <h1>Sum</h1>
        <p>{val}</p>
    </div>
  )
}

export default Prob2
