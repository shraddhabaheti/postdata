import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';
import './App.css';
import imagei from "./download.jpeg";
import images from "./sha.jpg";
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import Viewdetails from './Viewdetails';
function Basic() {
    const [data, setData] = useState([]);
    const [serch, setSerchbar] = useState([]);
    const navigate = useNavigate();

    const getApi = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            let result = res?.data.slice(0, 51)
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
            let result = serch.filter(value => value.title.includes(e.target.value))
            setData(result)
             

        }
        else {
            setData(serch)


        }
    }
    const onSubmit = () => {

        navigate(`/view`)

    }
    const submit = (id) => {

        navigate(`/viewdetails/${id}`)
        console.log(id)

    }
    return (

        <div>
            <div>
             <h1 className='id'>Post data with api </h1>
                              <input type="search" placeholder='serch...' className='id1' onChange={handleChange} />
            </div>
           
             <div className='container'>
                 
             <div className="row row-cols-3">
           
             { data.map((value, i,) => {
                
                    return (
                       
                        
                        <div className="col m-auto text-danger">
                            

                        <Card  border="info"style={{ width: '18rem'}}>
                            <Card.Title>{value.title}</Card.Title>
                            <Card.Img variant="top" src={value.url} />
                             <Card.Body >
                                <Card.Text>{value.id}</Card.Text>
                                <Card.Text> </Card.Text>
                                <Button variant="warning" size='md' type="submit" className='text'  onClick={() => onSubmit()}>view</Button>
                                <Button variant="primary" size='md' type="submit" className='text1' onClick={() => submit(value.id)}>viewdetails</Button>
                            </Card.Body>
                        </Card>
                        </div>
                      
                     )
                })
            }
         </div>
         </div>
        </div>
        
    );
}
export default Basic;
