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
    const navigate=useNavigate();
   // const { id } = useParams();
    const getApi = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/photos')
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
             let result =  data.filter(value => value.title.includes(e.target.value)) 
            setData(result)

        } 
         else {
            setData(serch)
        }
    }
    const onSubmit=(e)=>{
    e.preventDefault()
    navigate('/view')

}
const submit=(id)=>{

    navigate(`/viewdetails/${id}`)
   console.log(id)
 // console.log(title)


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
                        <Table key={i} striped bordered hover >
                            <tbody>
                                <tr>
                                    <td>
                                      
                                        <Card style={{ width: '18rem' }}>
                                            
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Img variant="top" src={value.url} />
                                            <Card.Body>
                                                <Card.Text>{value.id}</Card.Text>
                                                <Card.Text> </Card.Text>
                                                <Button variant="warning" type="submit" onClick={(e)=>onSubmit(e)}>view</Button>
                                                <Button variant="info" type="submit" onClick={(e)=>submit(value.id)}>viewDeatils</Button>
                                            </Card.Body>
                                        </Card>
                                        
                                    </td>
                                    <td>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Img variant="top" src={value.url} />
                                            <Card.Body>
                                                <Card.Text>{value.id}</Card.Text>
                                                <Card.Text></Card.Text>

                                                <Button variant="warning" type="submit" onClick={(e)=>onSubmit(e)}>view</Button>
                                                <Button variant="info" type="submit" onClick={(e)=>submit(value.id)}>viewDeatils</Button>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                    <td>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Img variant="top" src={value.url} />
                                            <Card.Body>
                                                <Card.Text>{value.id}</Card.Text>
                                                <Card.Text></Card.Text>
                                                <Button variant="warning" type="submit" onClick={(e)=>onSubmit(e)}>view</Button>
                                                <Button variant="info" type="submit" onClick={(e)=>submit(value.id)}>viewDeatils</Button>
                                        </Card.Body>
                                        </Card>
                                    </td>
                                   
                                    
                                </tr>
                            </tbody>
                        </Table>
                    )

                })
            }
        </div>

    );
}

export default Basic;
