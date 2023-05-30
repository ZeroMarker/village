import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import Footer from "../../layouts/Footer";

const DocumentFind = () => {

    // define documents state and get a methed to update documents
    const [documents, setDocuments] = useState([])
    const navigate = useNavigate();
    const [title, setTitle] = useState("")

    const goDocument = (documentId) => {
        navigate(`/document/${documentId}`);
    }
    // get document data from backend
    const getAllDocuments = (title) =>{
        DocumentService.getAllDocumentsByTitle(title).then((response) => {
            // console.log(response.data)
            setDocuments(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {

        getAllDocuments();


    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };



    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>

                <Card.Body>
                    <Card.Title className="text-center">
                        政策文件查询
                    </Card.Title>
                    <form onSubmit={getAllDocuments(title)} className="input-group">
                        <input
                            type="search"
                            placeholder="搜索政策文件"
                            value={title}
                            onChange={handleChange}
                            className="rounded"
                        />
                        <button type="submit" className="rounded btn-primary">重新搜索</button>
                    </form>


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
                                    <tbody>
                                    <tr>
                                        <td><a className="link-primary link-offset-2 text-decoration-none w-75" onClick={()=>goDocument(document.documentId)}>{document.title}</a></td>
                                        <td><span>{document.time}</span></td>

                                    </tr>
                                    </tbody>

                                </li>
                            )
                        }
                    </ul>
                </Card.Body>
            </Card>
            <Footer/>
        </div>
    )
}

export default DocumentFind;
