import React,{ useState,useEffect } from 'react'

import DocumentService from '../../services/DocumentService'

const UpdateDocumentComponent = ({id,setShowUpdateDocument,getAllDocuments}) => {

    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")
    const [documentContent, setDocumentContent] = useState("")
    



    const UpdateDocument = (e)=>{
        e.preventDefault();

        const document = {title, time, documentContent};

        // console.log(document)

      
        DocumentService.updateDocument(id,document).then(response => {

                setShowUpdateDocument(false);

                getAllDocuments();

            }).catch(error=>{

                console.log(error);

            })

        

        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DocumentService.getDocumentById(id);
                const { title, time, documentContent } = response.data;
                setTitle(title);
                setTime(time);
                setDocumentContent(documentContent);
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
                        <h2 className="text-center">编辑文件</h2>
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
                                    placeholder="时间"
                                    name="time"
                                    className="form-control"
                                    value = {time}
                                    onChange={e=>setTime(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">文件内容 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="文件内容"
                                    name="documentContent"
                                    className="form-control"
                                    value = {documentContent}
                                    onChange={e=>setDocumentContent(e.target.value)} />
                               </div>
                              

                                <button className="btn btn-success" onClick={(e)=>UpdateDocument(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowUpdateDocument(false)}>取消</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default UpdateDocumentComponent
