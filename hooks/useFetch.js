import {useState,useEffect} from 'react'
import {View,Text, Alert} from 'react-native'
import axios from 'axios'



  const useFetch=(endpoint,query)=>{
    const [data, setdata] = useState([]);
    const [error, seterror] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'x-rapidapi-key':'938b2111e9msh83539c0e8272204p10d427jsn49145f32f089',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
         ...query
        },
      };

      const fetchData= async()=>{
        setisLoading(true);
        try{
          const result =  await axios.request(options);

          setdata(result.data.data)
        }
        catch(error){
          seterror(error);
          Alert('there is an error while fetching data');
        }
        finally{
            setisLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
        
      }, []);

      const refetch=()=>{
        setisLoading(true);
        fetchData();
      }
      
   return   {data,isLoading,error,refetch};
}
export default useFetch;