import React,{useState,useEffect} from 'react'
import ModelService from '../../services/ModelService'
import {Link, useParams} from "react-router-dom";
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import Footer from "../../layouts/Footer";

const Doc = () => {

    // define models state and get a methed to update models
    const [model, setModel] = useState([]);
    let params = useParams();
    const modelId = params.modelId;

    // useEffect(() => {
    //     getModelById(modelId);
    // }, []);
    // const navigate = useNavigate();

    // const goModel = (modelId) => {
    //     // navigate(`/model/${modelId}`);
    // }
    // get model data from backend
    const getModelById = () =>{
        ModelService.getModelById(modelId).then((response) => {
            // console.log(response.data)
            setModel(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {

        getModelById();


    }, [])


    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>
                <Link to="/model" className="text-decoration-none">返回</Link>
                <Card.Body>
                    <Card.Title>{model.modelName}</Card.Title>
                    <Card.Header>{model.modelDescription}</Card.Header>
                    <Card.Text>
                        {model.modelContent}
                    </Card.Text>
                </Card.Body>

            </Card>
            <Footer/>
        </div>
    )
}

export default Doc;
