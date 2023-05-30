import React,{ useState } from 'react'
import ModelsService from '../../services/ModelService'

const AddModelComponent = ({setShowAddModel,getAllModels}) => {

    const [modelName, setModelName] = useState("")
    const [modelDescription, setModelDescription] = useState("")
    const [modelContent, setModelContent] = useState("")
 


    const saveModel = (e)=>{
        e.preventDefault();

        const model = {modelName,modelDescription,modelContent};

        // console.log(model)

        
        ModelsService.createModel(model).then(response=>{

            console.log(response.data)
            setShowAddModel(false);
            getAllModels();
                
    
        }).catch(error=>{
            console.log(error)
        })
        

        
    }

  
    return (
        <div style={{position:"absolute",width:"100%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}}>
            
           <div className="">
               <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                      <div style={{textAlign:"center",fontSize:"20px",fontWeight:"bold"}}>添加模型</div>
                       <div className="card-body" >
                           <form >
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
                                   <label className="form-label">模型介绍 :</label>
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

                                <button className="btn btn-success" onClick={(e)=>saveModel(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowAddModel(false)}>取消</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default AddModelComponent
