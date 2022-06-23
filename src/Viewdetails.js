import axios from 'axios';
import { useEffect, useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';
import './App.css';
import imagei from "./download.jpeg";
import images from "./sha.jpg";
//import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Viewdetails() {
   
    const [data, setData] = useState([]);
    const [serch, setSerchbar] = useState([]);
    const parm = useParams()
    //console.log("sasas",parm )
    
  const getApi = async () => {
     
        try {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${parm.id}`)
            let result = res?.data
            console.log(res.data)
             setData(result)
             setSerchbar(result)

        } catch (err) {
            console.log(err)
           
        }


    }
    useEffect(() => {
        getApi()
    }, [])
    const handleChange = (e) => {
        if (e.target.value) {
             let result =  data.filter(value => value.title.includes(e.target.value)) 
            setData(result)

        } 
         else {
            setData(serch)
        }
    }
  // console.log("sdaaa",data.title)

    return (

        <div>
            <div>
          <h1 className='id'>Post data with api </h1>
                <input type="search" placeholder='serch...'className='id1' onChange={handleChange} />
            </div>
           <h1>{data?.title}</h1>
           <img src={data?.url}/>
           <h2>{data?.albumId}</h2>
            <h2>{data?.id}</h2>
            </div>

    );
}

export default Viewdetails;
