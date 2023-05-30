import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import {Link, useParams} from "react-router-dom";
import Header from "../../layouts/Header";

import {Card} from "react-bootstrap";
import Footer from "../../layouts/Footer";

const Doc = () => {

    // define documents state and get a methed to update documents
    const [document, setDocument] = useState([]);
    let params = useParams();
    const documentId = params.documentId;

    // useEffect(() => {
    //     getDocumentById(documentId);
    // }, []);
    // const navigate = useNavigate();

    // const goDocument = (documentId) => {
    //     // navigate(`/document/${documentId}`);
    // }
    // get document data from backend
    const getDocumentById = () =>{
        DocumentService.getDocumentById(documentId).then((response) => {
            // console.log(response.data)
            setDocument(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {

        getDocumentById();


    }, [])


    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>

                <Card.Body>
                    <Link to="/document" className="text-decoration-none">返回</Link>
                    <Card.Title>{document.title}</Card.Title>
                    <Card.Header>{document.time}</Card.Header>
                    <Card.Text>
                        {document.documentContent}
                    </Card.Text>
                </Card.Body>

            </Card>
            <Footer/>
        </div>
    )
}

export default Doc;
