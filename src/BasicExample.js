import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { getValue } from '@testing-library/user-event/dist/utils';
//import imageI from "./download.jpeg"

function BasicExample() {
    const [photos, setPhotos] = useState([])
   
    // const [searchField, setSearchField] = useState("");
     const [searchtitle, setSearchTitle] = useState([]);
    const getApi = async () => {

        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            let newData = res?.data.slice(0, 50)
            setPhotos(newData)
            setSearchTitle(newData)
        } catch (err) {
            console.log(err)
        }

    }
    // 
    useEffect(() => {

        getApi()
    }, [])
    //  console.log('==============>', photos)

    const filterData = (e) => {
        if(e.target.value){
            //  debugger
           let newData = photos.filter(value => value.title.includes(e.target.value ))
           
            setPhotos(newData)
        
        }else{

        //   let newData = searchtitle.filter(value => value.title.includes(e.target.value))
        //    setSearchTitle(newData)
           setPhotos(searchtitle)
        }
 }
    

    return (

        <div>
            <div>
                <input type="search" placeholder='serch...' onChange={filterData} />
            </div>
            {
                photos.map((value, i) => {
                    return (
                        <Table key={i}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Img variant="top" src={value.url} />
                                            <Card.Body>
                                                <Card.Text>{value.id}</Card.Text>
                                                <Card.Text> </Card.Text>

                                                <Button variant="primary">view</Button>
                                                <Button variant="info">viewDeatils</Button>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                    <td>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Img variant="top" src={value.url} />
                                            <Card.Body>


                                                <Card.Text>{value.id} </Card.Text>
                                                <Card.Text></Card.Text>

                                                <Button variant="primary">view</Button>
                                                <Button variant="info">viewDeatils</Button>


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
                                                <Button variant="primary">view</Button>
                                                <Button variant="info">viewDeatils</Button>

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

export default BasicExample;