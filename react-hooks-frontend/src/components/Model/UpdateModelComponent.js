import React,{ useState,useEffect } from 'react'

import ModelsService from '../../services/ModelService'

const UpdateModelComponent = ({id,setShowUpdateModel,getAllModels}) => {

    const [modelName, setModelName] = useState("")
    const [modelDescription, setModelDescription] = useState("")
    const [modelContent, setModelContent] = useState("")



    const UpdateModel = (e)=>{
        e.preventDefault();

        const model = {modelName,modelDescription,modelContent};

        // console.log(model)
        ModelsService.updateModel(id, model).then(response => {

            setShowUpdateModel(false);

            getAllModels();

        }).catch(error=>{

            console.log(error);

        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ModelsService.getModelById(id);
                const { modelName, modelDescription, modelContent } = response.data;
                setModelName(modelName);
                setModelDescription(modelDescription);
                setModelContent(modelContent);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

 

    return (
        <div style={{position:"absolute",width:"100%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}}>
            <br/>
           <div className="">
               <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                        <h2 className="text-center">Update Model</h2>
                       <div className="card-body">
                           <form>
                               <div className="form-group mb-2">
                                   <label className="form-label">模型名称 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="模型名称"
                                    name="modelName"
                                    className="form-control"
                                    value = {modelName}
                                    onChange={e=>setModelName(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">模型描述 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="模型描述"
                                    name="modelDescription"
                                    className="form-control"
                                    value = {modelDescription}
                                    onChange={e=>setModelDescription(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">模型内容 :</label>
                                   <input 
                                    type="email" 
                                    placeholder="模型内容"
                                    name="modelContent"
                                    className="form-control"
                                    value = {modelContent}
                                    onChange={e=>setModelContent(e.target.value)} />
                               </div>

                                <button className="btn btn-success" onClick={(e)=>UpdateModel(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowUpdateModel(false)}>取消</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default UpdateModelComponent
