import React,{ useState,useEffect } from 'react'

import InfoService from '../../services/InfoService'

const UpdateInfoComponent = ({id,setShowUpdateInfo,getAllInfos}) => {

    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")
    const [infoContent, setInfoContent] = useState("")
    const [infoName, setInfoName] = useState("");
    const [agriculture, setAgriculture] = useState("");
    const [education, setEducation] = useState("");
    const [broadband, setBroadband] = useState("");
    const [cable, setCable] = useState("");
    const [data, setData] = useState("");
    const [air, setAir] = useState("");
    const [emergency, setEmergency] = useState("");
    const [power, setPower] = useState("");
    const [water, setWater] = useState("");
    const [government, setGovernment] = useState("");
    const [irrigation, setIrrigation] = useState("");
    const [medical, setMedical] = useState("");
    const [online, setOnline] = useState("");
    const [logistics, setLogistics] = useState("");
    const [mobile, setMobile] = useState("");
    const [soil, setSoil] = useState("");
    const [technology, setTechnology] = useState("");
    const [traffic, setTraffic] = useState("")




    const UpdateInfo = (e)=>{
        e.preventDefault();

        const info = {title, time, infoContent};

        // console.log(info)


        InfoService.updateInfo(id,info).then(response => {

            setShowUpdateInfo(false);

            getAllInfos();

        }).catch(error=>{

            console.log(error);

        })




    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await InfoService.getInfoById(id);
                const { title, time, infoContent } = response.data;
                setTitle(title);
                setTime(time);
                setInfoContent(infoContent);
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
                        <h2 className="text-center">更新文件</h2>
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
                                        type="text"
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
                                        name="infoContent"
                                        className="form-control"
                                        value = {infoContent}
                                        onChange={e=>setInfoContent(e.target.value)} />
                                </div>


                                <button className="btn btn-success" onClick={(e)=>UpdateInfo(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowUpdateInfo(false)}>取消</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateInfoComponent
