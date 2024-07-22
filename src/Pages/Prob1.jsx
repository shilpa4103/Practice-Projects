import React, { useState } from 'react'
import axios from 'axios';
const Prob1 = () => {
    const [arr,setArr] = useState("");
    const [sortarr,setSortArr]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const Array = arr.split(",")
            .map(item => parseInt(item, 10))
            .filter(item => !isNaN(item));

        try{
            const response=await axios.post('http://localhost:5600/sort',{array:Array});
            setSortArr(response.data.Arr);
            console.log(sortarr);


        }
        catch(error){
            console.log("Error");
        }
        
    }

  return (
    <div>
        <h1>Sort Array</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter Array</label>
            <input type="text" value={arr} onChange={(e)=>{
                setArr(e.target.value)
            }}/>
            <button type="submit">Submit</button>
        </form>
        <h1>Sorted Array</h1>
        <p>{sortarr}</p>
    </div>
  )
}

export default Prob1;
