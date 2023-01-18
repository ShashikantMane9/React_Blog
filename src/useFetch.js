import { useState,useEffect} from "react";
const useFetch = (url) => {

    const [data,setdata] = useState(null);
    const [isLoading,setIsLoading]= useState(true);
    const[error,setError] = useState(null); 

    useEffect( () => {

        const abortCont = new AbortController();

        setTimeout(()=>{
        fetch(url,{signal:abortCont.signal})
        .then(res =>{
            //if res.ok is false means there may be error while fetch data
            if(!res.ok){
                throw new Error('Could not fetch the data from resource !!');
            }
            //to return the json text data
            return res.json();
        }).then(data =>{
            //console.log(data);
            //set the updated data
            setdata(data);
             //to stop loading
            setIsLoading(false);
             //to reset error message
            setError(null);
        })
        .catch(err=>{
            if(err.name === "AbortError"){
                console.log('Abort error');
            }else{
                //to stop loading
                setIsLoading(false);
                //to show error
                setError(err.message);
            }
           
        })
        },500)

        return () => abortCont.abort();
    },[url]);

    return {data,isLoading,error}
}

export default useFetch;