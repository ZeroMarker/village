import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import {useParams} from "react-router-dom";
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";

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
                    <Card.Title>{document.title}</Card.Title>
                    <Card.Header>{document.time}</Card.Header>
                    <Card.Text>
                        {document.documentContent}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}

export default Doc;
