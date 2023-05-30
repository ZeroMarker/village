import React,{ useState } from 'react'
import DocumentService from '../../services/DocumentService'

const AddDocumentComponent = ({setShowAddDocument,getAllDocuments}) => {


    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")
    const [documentContent, setDocumentContent] = useState("")

 


    const saveDocument = (e)=>{
        e.preventDefault();

        const document = { title, time, documentContent};

        // console.log(document)

        
        DocumentService.createDocument(document).then(response=>{

            // console.log(response.data)
            setShowAddDocument(false);
            getAllDocuments();
                
    
        }).catch(error=>{
            console.log(error)
        })
        

        
    }

  
    return (
        <div style={{position:"absolute",width:"100%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}}>
            
           <div className="">
               <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                      <div style={{textAlign:"center",fontSize:"20px",fontWeight:"bold"}}>添加政策文件</div>
                       <div className="card-body">
                           <form>
                               <div className="form-group mb-2">
                                   <label className="form-label">标题 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="标题"
                                    name="title"
                                    className="form-control"
                                    value = {title}
                                    onChange={e=>setTitle(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">时间 :</label>
                                   <input 
                                    type="date"
                                    placeholder="时间 "
                                    name="time"
                                    className="form-control"
                                    value = {time}
                                    onChange={e=>setTime(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">文件内容 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="文件内容 "
                                    name="documentContent"
                                    className="form-control"
                                    value = {documentContent}
                                    onChange={e=>setDocumentContent(e.target.value)} />
                               </div>
                              

                                <button className="btn btn-success" onClick={(e)=>saveDocument(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowAddDocument(false)}>取消</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default AddDocumentComponent
