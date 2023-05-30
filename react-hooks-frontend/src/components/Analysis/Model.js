import React,{useState,useEffect} from 'react'
import ModelService from '../../services/ModelService'
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import Footer from "../../layouts/Footer";

const Model = () => {

    // define models state and get a method to update models
    const [models, setModels] = useState([])
    const navigate = useNavigate();

    const goModel = (modelId) => {
        navigate(`/model/${modelId}`);
    }
    // get model data from backend
    const getAllModels = () =>{
        ModelService.getAllModels().then((response) => {
            // console.log(response.data)
            setModels(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {

        getAllModels();


    }, [])


    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        算法模型
                    </Card.Title>
                    <ul>
                        {
                            models.map(model=>
                                <li key={model.modelId} className="list-group-item">
                                    <script>
                                        // 如果标题长度大于截取长度，就截取一部分并显示省略号
                                        if (document.title.length > 10) {
                                        model.modelDescription = model.modelDescription.substring(0, 50) + "..."
                                    }
                                    </script>

                                    <a className="link-primary link-offset-2 text-decoration-none w-75" onClick={()=>goModel(model.modelId)}>{model.modelName}</a>
                                    <p>{model.modelDescription}</p>



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

export default Model;
