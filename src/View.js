
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
//import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';

function View() {
    const [data, setData] = useState([]);
    const [serch, setSerchbar] = useState([]);
  const location=useLocation();
   console.log(location,"===>")
    const getApi = async () => {
        try {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
            let result = res?.data.slice(0, 50)
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
             let result =  serch.filter(value => value.title.includes(e.target.value)) 
            setData(result)
        } 
         else {
            setSerchbar(serch)
         }
  
      }
   
    return (

        <div>
            <div>
          <h1 className='id'>Post data with api </h1>
                <input type="search" placeholder='serch...'className='id1' onChange={handleChange} />
            </div>
           
            {
                data.map((value, i) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <h1>hello I am{location.pathname.replace("/","")} learning view</h1>
                       <Card.Title>{value.title}</Card.Title>
                       <Card.Img variant="top" src={value.url} />
                         <Card.Body>
                        <Card.Text>{value.id}</Card.Text>
                        <Card.Text> </Card.Text>
                         </Card.Body>
                         </Card>
                     )
               })
            }
        </div> 
     );
}

export default View;
