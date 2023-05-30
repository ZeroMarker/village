import React,{ useState } from 'react'
import InfosService from '../../services/InfoService'

const AddInfoComponent = ({setShowAddInfo,getAllInfos}) => {

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
    



    const saveInfo = (e)=>{
        e.preventDefault();

        const info = {infoName, agriculture, data, air, soil, broadband, cable, education, emergency, government, irrigation, logistics, medical, mobile, online, power, water, technology, traffic};
        // console.log(info)
        InfosService.createInfo(info).then(response=>{
            // console.log(response.data)
            setShowAddInfo(false);
            getAllInfos();
        }).catch(error=>{
            console.log(error)
        })



    }


    return (
        <div className="z-1" >

            <div className="">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                        <div style={{textAlign:"center",fontSize:"20px",fontWeight:"bold"}}> 添加数据</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">测度对象 :</label>
                                    <input
                                        type="text"
                                        placeholder="测度对象"
                                        name="infoName"
                                        className="form-control"
                                        value = {infoName}
                                        onChange={e=>setInfoName(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">广电网络 :</label>
                                    <input
                                        type="text"
                                        placeholder="广电网络 "
                                        name="cable"
                                        className="form-control"
                                        value = {cable}
                                        onChange={e=>setCable(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">宽带网络 :</label>
                                    <input
                                        type="text"
                                        placeholder="宽带网络 "
                                        name="broadband"
                                        className="form-control"
                                        value = {broadband}
                                        onChange={e=>setBroadband(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">移动网络 :</label>
                                    <input
                                        type="text"
                                        placeholder="移动网络 "
                                        name="mobile"
                                        className="form-control"
                                        value = {mobile}
                                        onChange={e=>setMobile(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">数字农业 :</label>
                                    <input
                                        type="text"
                                        placeholder="数字农业 "
                                        name="agriculture"
                                        className="form-control"
                                        value = {agriculture}
                                        onChange={e=>setAgriculture(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">数字交通 :</label>
                                    <input
                                        type="text"
                                        placeholder="数字交通 "
                                        name="traffic"
                                        className="form-control"
                                        value = {traffic}
                                        onChange={e=>setTraffic(e.target.value)} />
                                </div>
                                
                                <div className="form-group mb-2">
                                    <label className="form-label">数字水利 :</label>
                                    <input
                                        type="text"
                                        placeholder="数字水利 "
                                        name="irrigation"
                                        className="form-control"
                                        value = {irrigation}
                                        onChange={e=>setIrrigation(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">数字电力 :</label>
                                    <input
                                        type="text"
                                        placeholder="数字电力 "
                                        name="power"
                                        className="form-control"
                                        value = {power}
                                        onChange={e=>setPower(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">数字物流 :</label>
                                    <input
                                        type="text"
                                        placeholder="数字物流 "
                                        name="logistics"
                                        className="form-control"
                                        value = {logistics}
                                        onChange={e=>setLogistics(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">政务服务 :</label>
                                    <input
                                        type="text"
                                        placeholder="政务服务 "
                                        name="government"
                                        className="form-control"
                                        value = {government}
                                        onChange={e=>setGovernment(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">电商服务 :</label>
                                    <input
                                        type="text"
                                        placeholder="电商服务 "
                                        name="online"
                                        className="form-control"
                                        value = {online}
                                        onChange={e=>setOnline(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">教育服务 :</label>
                                    <input
                                        type="text"
                                        placeholder="教育服务 "
                                        name="education"
                                        className="form-control"
                                        value = {education}
                                        onChange={e=>setEducation(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">医疗服务 :</label>
                                    <input
                                        type="text"
                                        placeholder="医疗服务 "
                                        name="medical"
                                        className="form-control"
                                        value = {medical}
                                        onChange={e=>setMedical(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">土壤环境 :</label>
                                    <input
                                        type="text"
                                        placeholder="土壤环境 "
                                        name="soil"
                                        className="form-control"
                                        value = {soil}
                                        onChange={e=>setSoil(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">水环境 :</label>
                                    <input
                                        type="text"
                                        placeholder="水环境 "
                                        name="water"
                                        className="form-control"
                                        value = {water}
                                        onChange={e=>setWater(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">大气环境 :</label>
                                    <input
                                        type="text"
                                        placeholder="大气环境 "
                                        name="air"
                                        className="form-control"
                                        value = {air}
                                        onChange={e=>setAir(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">应急防控 :</label>
                                    <input
                                        type="text"
                                        placeholder="应急防控 "
                                        name="emergency"
                                        className="form-control"
                                        value = {emergency}
                                        onChange={e=>setEmergency(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">技术应用安全 :</label>
                                    <input
                                        type="text"
                                        placeholder="技术应用安全 "
                                        name="technology"
                                        className="form-control"
                                        value = {technology}
                                        onChange={e=>setTechnology(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">数据安全 :</label>
                                    <input
                                        type="text"
                                        placeholder="数据安全 "
                                        name="data"
                                        className="form-control"
                                        value = {data}
                                        onChange={e=>setData(e.target.value)} />
                                </div>
                                
                                
                                <button className="btn btn-success" onClick={(e)=>saveInfo(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowAddInfo(false)}>取消</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInfoComponent
