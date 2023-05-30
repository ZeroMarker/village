import React, {useState,useEffect} from 'react'
import InfoService from '../../services/InfoService'
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
const Info = () => {
    // define Infos state and get a method to update Infos
    const [Infos, setInfos] = useState([])
    // navigate to add info page
    const navigate = useNavigate();
    const addInfo = () => {
        navigate("/addinfo");
    }
    // get Infos data from backend
    const getAllInfos = () =>{
        InfoService.getAllInfos().then((response) => {
            // console.log(response.data)
            setInfos(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }
    const  reInfoRate = () =>{
        InfoService.reRate().then((response) => {
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    const  clearRate = () =>{
        InfoService.clearRate().then((response) => {
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    // Call the method when the component dismount
    useEffect(() => {
        getAllInfos();
    }, [Infos])
    return (
        <div className="" style={{position:"relative"}}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        数据列表
                    </Card.Title>
                    <div className="btn-group mx-3" role="group">
                        <button className="btn btn-primary mb-2" onClick={()=>addInfo()}>添加数据</button>
                        <button className="btn btn-primary mb-2" onClick={()=>reInfoRate()}>水平测度</button>
                        <button className="btn btn-primary mb-2" onClick={()=>clearRate()}>清除测度</button>
                    </div>

                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th rowSpan={2}>评价对象</th>
                            <th colSpan={3}>网络基础设施</th>
                            <th colSpan={5}>数字产业转型</th>
                            <th colSpan={4}>公共服务设施</th>
                            <th colSpan={3}>生态环境保护</th>
                            <th colSpan={3}>安全与防控</th>
                        </tr>
                        <tr>
                            <th>广电网络</th>
                            <th>宽带网络</th>
                            <th>移动网络</th>
                            <th>数字农业</th>
                            <th>数字交通</th>
                            <th>数字水利</th>
                            <th>数字电力</th>
                            <th>数字物流</th>
                            <th>政务服务</th>
                            <th>电商服务</th>
                            <th>教育服务</th>
                            <th>医疗服务</th>
                            <th>土壤环境</th>
                            <th>水环境</th>
                            <th>大气环境</th>
                            <th>应急防控</th>
                            <th>技术应用</th>
                            <th>数据安全</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Infos.map(Info=>
                                <tr key={Info.infoId}>
                                    <td>{Info.infoName}</td>
                                    <td>{Info.cable}</td>
                                    <td>{Info.broadband}</td>
                                    <td>{Info.mobile}</td>
                                    <td>{Info.agriculture}</td>
                                    <td>{Info.traffic}</td>
                                    <td>{Info.irrigation}</td>
                                    <td>{Info.power}</td>
                                    <td>{Info.logistics}</td>
                                    <td>{Info.government}</td>
                                    <td>{Info.online}</td>
                                    <td>{Info.education}</td>
                                    <td>{Info.medical}</td>
                                    <td>{Info.soil}</td>
                                    <td>{Info.water}</td>
                                    <td>{Info.air}</td>
                                    <td>{Info.emergency}</td>
                                    <td>{Info.technology}</td>
                                    <td>{Info.data}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Info;
