import React,{useState,useEffect} from 'react'
import InfoService from '../../services/InfoService'
import AddInfoComponent from './AddInfoComponent'
import UpdateInfoComponent from './UpdateInfoComponent'
import Header from "../../layouts/Header";
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";
import FooterComponent from "../../layouts/FooterComponent";
import DocumentService from "../../services/DocumentService";

const ListInfoComponent = () => {

    // define Infos state and get a method to update Infos
    const [Infos, setInfos] = useState([])

    // define addInfo's Pop-ups state
    const [showAddInfo,setShowAddInfo] = useState(false);

    // define updateInfo's Pop-ups state
    const [showUpdateInfo,setShowUpdateInfo] = useState(false);

    // define the updateId
    let [activeId,setActiveId] = useState(null);

    const [showConfirmation, setShowConfirmation] = useState(false);

    // const handleDeleteClick = () => {
    //     setShowConfirmation(true);
    // };

    const handleConfirmDelete = () => {
        // 执行删除操作
        // 这里可以调用删除函数或者传递删除操作给父组件
        InfoService.deleteInfo(activeId).then(response=>{

            getAllInfos();

        }).catch(error=>{
            console.log(error)
        })
        setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    // get Infos data from backend
    const getAllInfos = () =>{

        InfoService.getAllInfos().then((response) => {
            // console.log(response.data)
            setInfos(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    // Call the method when the component dismount
    useEffect(() => {

        getAllInfos();


    }, [])

    const updateInfo = (InfoId) => {
        setActiveId(InfoId);
        setShowUpdateInfo(true);
    }

    const deleteInfo = (InfoId) => {
        // console.log(InfoId);
        setShowConfirmation(true);
        setActiveId(InfoId);
        // InfoService.deleteInfo(InfoId).then(response=>{
        //
        //     getAllInfos();
        //
        // }).catch(error=>{
        //     console.log(error)
        // })
    }


    return (
        <div>
            <HeaderComponent/>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        数据列表
                    </Card.Title>
                    <Card.Header>

                    </Card.Header>
                    <Card.Text>
                        <button className="btn btn-primary mb-2" onClick={()=>setShowAddInfo(true)}>添加数据</button>

                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th rowSpan={2}>评价对象</th>
                                <th colSpan={3}>网络基础设施</th>
                                <th colSpan={5}>数字产业转型</th>
                                <th colSpan={4}>公共服务设施</th>
                                <th colSpan={3}>生态环境保护</th>
                                <th colSpan={3}>安全与防控</th>
                                <th rowSpan={2}>操作</th>
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
                                        <td>
                                            <button className="btn btn-info" onClick={() => updateInfo(Info.infoId)}>编辑</button>
                                            <button className="btn btn-danger" onClick={() => deleteInfo(Info.infoId)}

                                            >删除</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        {
                            showAddInfo? <AddInfoComponent setShowAddInfo={setShowAddInfo} getAllInfos={getAllInfos} /> : null
                        }
                        {
                            showUpdateInfo? <UpdateInfoComponent id={activeId} setShowUpdateInfo={setShowUpdateInfo} getAllInfos={getAllInfos} /> : null
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

export default ListInfoComponent;
