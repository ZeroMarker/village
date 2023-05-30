import React, {useState, useEffect, useContext} from 'react'
import ModelsService from '../../services/ModelService'
import AddModelComponent from './AddModelComponent'
import UpdateModelComponent from './UpdateModelComponent'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";
import FooterComponent from "../../layouts/FooterComponent";
import AuthContext from "../Login/AuthProvider";
import accountService from "../../services/AccountService";
import {useNavigate} from "react-router-dom";

const ListModelComponent = () => {

    // define models state and get a methed to update models
    const [models, setModels] = useState([])

    const [showAddModel,setShowAddModel] = useState(false);
    const [showUpdateModel,setShowUpdateModel] = useState(false);
    let [activeId,setActiveId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

    const getAccount = () => {
        if(auth.roles === "admin") {

        }
        else {
            alert("请登录管理员账户");
            navigate(`/admin/login`);
        }

    }
    useEffect(() => {
        getAccount();
    }, [])
    // const handleDeleteClick = () => {
    //     setShowConfirmation(true);
    // };

    const handleConfirmDelete = () => {
        // 执行删除操作
        // 这里可以调用删除函数或者传递删除操作给父组件
        ModelsService.deleteModel(activeId).then(response=>{

            getAllModels();

        }).catch(error=>{
            console.log(error)
        })
        setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
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
    }, [])

    const updateModel = (modelId) => {
        setActiveId(modelId);
        setShowUpdateModel(true);
    }

    const deleteModel = (modelId) => {
        // console.log(modelId);
        // ModelsService.deleteModel(modelId).then(response=>{
        //
        //     getAllModels();
        //
        // }).catch(error=>{
        //     console.log(error)
        // })
        setShowConfirmation(true);
        setActiveId(modelId);
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
                                            <button className="btn btn-info" onClick={() => updateModel(model.modelId)}>编辑</button>
                                            <button className="btn btn-danger" onClick={()=> deleteModel(model.modelId)}>删除</button>
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
                        {showConfirmation && (
                            <div style={{position:"absolute",width:"50%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}} className="modal-dialog modal-dialog-centered bg-info rounded">

                                <div className="modal-content">
                                    <p>确认删除吗？</p>
                                    <button onClick={handleConfirmDelete} className="rounded">确认</button>
                                    <button onClick={handleCancelDelete} className="rounded">取消</button>
                                </div>
                            </div>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
            <FooterComponent/>
        </div>
    )
}

export default ListModelComponent;
