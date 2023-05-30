import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import Header from "../../layouts/Header";
import {Link, useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import Footer from "../../layouts/Footer";

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

                <Card.Body className="text-center">
                    {/*<img src="https://p5.itc.cn/images01/20230413/016401200cc5421988e99310b996deb9.jpeg" alt="shuzi" className="w-100"/>*/}

                    <Card.Title className="text-center">
                        <h2>
                            政策文件
                        </h2>
                        <img src="https://p8.itc.cn/images01/20230413/a8566b12cdef40a2ac6ccb3870b4d076.jpeg" alt="shuzi" className="w-75"/>
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
                    <hr/>
                    <Link to="/document/find" className="link-success text-decoration-none">查找政策文件</Link>
                </Card.Body>

            </Card>
            <Footer/>
        </div>
    )
}

export default Document;
