import React,{useState,useEffect} from 'react'
import ModelsService from '../../services/ModelService'
import AddModelComponent from './AddModelComponent'
import UpdateModelComponent from './UpdateModelComponent'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";


const ListModelComponent = () => {

    // define models state and get a methed to update models
    const [models, setModels] = useState([])

    const [showAddModel,setShowAddModel] = useState(false);
    const [showUpdateModel,setShowUpdateModel] = useState(false);
    let [activeId,setActiveId] = useState(null);


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
        

    }, [])

    const updateModel = (modelId) => {
        setActiveId(modelId);
        setShowUpdateModel(true);
    }

    const deleteModel = (modelId) => {
        // console.log(modelId);
        ModelsService.deleteModel(modelId).then(response=>{

            getAllModels();

        }).catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="" style={{position:"relative"}}>
            <HeaderComponent />
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        模型列表
                    </Card.Title>
                    <Card.Header>

                    </Card.Header>
                    <Card.Text>
                        <button className="btn btn-primary mb-2" onClick={()=>setShowAddModel(true)}>添加模型</button>
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>

                                <th>模型名称</th>
                                <th>模型描述</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                models.map(model=>
                                    <tr key={model.modelId}>
                                        <script>
                                            // 如果标题长度大于截取长度，就截取一部分并显示省略号
                                            if (document.title.length > 10) {
                                            model.modelDescription = model.modelDescription.substring(0, 50) + "..."
                                        }
                                        </script>
                                        <td>{model.modelName}</td>
                                        <td>{model.modelDescription}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => updateModel(model.modelId)}>更新</button>
                                            <button className="btn btn-danger" onClick={()=>deleteModel(model.modelId)}

                                            >删除</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        {
                            showAddModel? <AddModelComponent setShowAddModel={setShowAddModel} getAllModels={getAllModels} /> : null
                        }
                        {
                            showUpdateModel? <UpdateModelComponent id={activeId} setShowUpdateModel={setShowUpdateModel} getAllModels={getAllModels} /> : null
                        }
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ListModelComponent;
