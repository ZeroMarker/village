import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";

const Document = () => {

    // define documents state and get a methed to update documents
    const [documents, setDocuments] = useState([])
    const navigate = useNavigate();

    const goDocument = (documentId) => {
        navigate(`/document/${documentId}`);
    }
    // get document data from backend
    const getAllDocuments = () =>{
        DocumentService.getAllDocuments().then((response) => {
            // console.log(response.data)
            setDocuments(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {

        getAllDocuments();


    }, [])


    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>

                <Card.Body>
                    <Card.Title className="text-center">
                        政策文件
                    </Card.Title>
                    <ul>
                        {
                            documents.map(document=>
                                <li key={document.documentId} className="list-group-item">
                                    <script>
                                        // 如果标题长度大于截取长度，就截取一部分并显示省略号
                                        if (document.title.length > 10) {
                                        document.title = document.title.substring(0, 25) + "..."
                                    }
                                    </script>
                                    <a className="link-primary link-offset-2 text-decoration-none w-75" onClick={()=>goDocument(document.documentId)}>{document.title}</a>
                                    <span>{document.time}</span>

                                </li>
                            )
                        }
                    </ul>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Document;
