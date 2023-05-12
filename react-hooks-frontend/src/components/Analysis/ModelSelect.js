import React,{useState,useEffect} from 'react'
import ModelsService from '../../services/ModelService'
import {Card} from "react-bootstrap";


const ListModelComponent = () => {

    // define models state and get a methed to update models
    const [models, setModels] = useState([])

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    // get models data from backend
    const getAllModels = () =>{
        ModelsService.getAllModels().then((response) => {
            // console.log(response.data)
            setModels(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {

        getAllModels();


    }, [models])


    return (
        <div style={{position:"relative"}}>
            <Card>
                <Card.Body>
                    <Card.Title>选择模型</Card.Title>
                </Card.Body>
                <Card.Header>
                    {
                        models.map(model=>
                            <button
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title={model.modelDescription}
                                key={model.modelId}
                                className={`${active ? "btn btn-secondary" : "btn btn-success"}`}
                                onClick={handleClick}
                            >
                                {model.modelName}
                            </button>
                        )
                    }
                </Card.Header>

            </Card>
        </div>
    )
}

export default ListModelComponent;
