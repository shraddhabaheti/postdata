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
    const parm = useParams()

    const getApi = async () => {

        try {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${parm.id}`)
            let result = res?.data
            console.log(res.data)
            setData(result)


        } catch (err) {
            console.log(err)

        }


    }
    useEffect(() => {
        getApi()
    }, [])



    return (

        <div >
            <div>
                <h1 className='id'>Post data with api with  Id  </h1>

            </div>
            <h1>{data?.title}</h1>
            <img src={data?.url} />
            <h2>{data?.albumId}</h2>
            <h2>{data?.id}</h2>
        </div>

    );
}

export default Viewdetails;
