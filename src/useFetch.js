import { useEffect,useState } from "react";

const useFetch =(url)=>{
    const[data,setData]=useState(null);
    const[isPending,setisPending]=useState(true)
    useEffect(()=>{
        fetch(url)
        .then(res =>{
            if(res.status !== 200){
                throw Error("Could Not Fetch Data");
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setisPending(false)
        })
        .catch(err=>console.log(err.message))
    },[url]);
    return {data , isPending}
}

export default useFetch