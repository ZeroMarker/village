import React,{useState,useEffect} from 'react'
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card, Form, Button} from "react-bootstrap";
import Footer from "../../layouts/Footer";

const Request = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${title}\nContent: ${content}`);
        // Send feedback data to server
    };


    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>

                <Card.Body>
                    <Card.Title className="text-center">
                        用户反馈
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter feedback content" value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <Footer/>
        </div>
    )
}

export default Request;
