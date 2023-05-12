import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import AddDocumentComponent from './AddDocumentComponent'
import UpdateDocumentComponent from './UpdateDocumentComponent'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";

const ListDocumentComponent = () => {

    // define documents state and get a methed to update documents
    const [documents, setDocuments] = useState([])

    const [showAddDocument,setShowAddDocument] = useState(false);
    const [showUpdateDocument,setShowUpdateDocument] = useState(false);
    let [activeId,setActiveId] = useState(null);


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

    const updateDocument = (documentId) => {
        setActiveId(documentId);
        setShowUpdateDocument(true);
    }

    const deleteDocument = (documentId) => {
        // console.log(documentId);
        DocumentService.deleteDocument(documentId).then(response=>{

            getAllDocuments();

        }).catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="" style={{position:"relative"}}>
            <HeaderComponent/>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        政策文件列表
                    </Card.Title>
                    <Card.Header>

                    </Card.Header>
                    <Card.Text>
                        <button className="btn btn-primary mb-2" onClick={()=>setShowAddDocument(true)}>添加政策</button>
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>政策文件Id</th>
                                <th>标题</th>
                                <th>时间</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                documents.map(document=>
                                    <tr key={document.documentId}>
                                        <td>{document.documentId}</td>
                                        <td>{document.title}</td>
                                        <td>{document.time}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => updateDocument(document.documentId)}>更新</button>
                                            <button className="btn btn-danger" onClick={() => deleteDocument(document.documentId)}

                                            >删除</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        {
                            showAddDocument? <AddDocumentComponent setShowAddDocument={setShowAddDocument} getAllDocuments={getAllDocuments} /> : null
                        }
                        {
                            showUpdateDocument? <UpdateDocumentComponent id={activeId} setShowUpdateDocument={setShowUpdateDocument} getAllDocuments={getAllDocuments} /> : null
                        }
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ListDocumentComponent;
