import React,{useState,useEffect} from 'react'
import RateService from '../../services/RateService'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";
import FooterComponent from "../../layouts/FooterComponent";
// import AddRateComponent from './AddRateComponent'
// import UpdateRateComponent from './UpdateRateComponent'

const ListRateComponent = () => {

    // define Rates state and get a method to update Rates
    const [Rates, setRates] = useState([])

    // define addRate's Pop-ups state
    // const [showAddRate,setShowAddRate] = useState(false);
    //
    // // define updateRate's Pop-ups state
    // const [showUpdateRate,setShowUpdateRate] = useState(false);
    //
    // // define the updateId
    // let [activeId,setActiveId] = useState(null);


    // get Rates data from backend
    const getAllRates = () =>{
        RateService.getAllRates().then((response) => {
            // console.log(response.data)
            setRates(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    // Call the method when the component dismount
    useEffect(() => {

        getAllRates();


    }, [])

    // const updateRate = (RateId) => {
    //     setActiveId(RateId);
    //     setShowUpdateRate(true);
    // }
    //
    // const deleteRate = (RateId) => {
    //     // console.log(RateId);
    //     RateService.deleteRate(RateId).then(response=>{
    //
    //         getAllRates();
    //
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }


    return (
        <div className="" style={{position:"relative"}}>
            <HeaderComponent/>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        测度结果列表
                    </Card.Title>
                    <Card.Header>

                    </Card.Header>
                    <Card.Text>
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>测度对象</th>
                                <th>网络设施</th>
                                <th>数字产业转型</th>
                                <th>公共服务设施</th>
                                <th>生态环境建设</th>
                                <th>安全与维护</th>
                                <th>综合评分</th>
                                {/*<th>操作</th>*/}
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Rates.map(Rate=>
                                    <tr key={Rate.rateId}>
                                        <td>{Rate.rateName}</td>
                                        <td>{Rate.network}</td>
                                        <td>{Rate.industry}</td>
                                        <td>{Rate.service}</td>
                                        <td>{Rate.ecosystem}</td>
                                        <td>{Rate.security}</td>
                                        <td>{Rate.overall}</td>
                                        {/*<td>*/}
                                        {/*    <button className="btn btn-info" onClick={() => updateRate(Rate.rateId)}>编辑</button>*/}
                                        {/*    <button className="btn btn-danger" onClick={() => deleteRate(Rate.rateId)}*/}
                                        {/*            */}
                                        {/*    >删除</button>*/}
                                        {/*</td>*/}
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </Card.Text>
                </Card.Body>
            </Card>
            <FooterComponent/>
            {/*<button className="btn btn-primary mb-2" onClick={()=>setShowAddRate(true)}>添加评价</button>*/}


            {/*{*/}
            {/*    showAddRate? <AddRateComponent setShowAddRate={setShowAddRate} getAllRates={getAllRates} /> : null*/}
            {/*}*/}
            {/*{*/}
            {/*    showUpdateRate? <UpdateRateComponent id={activeId} setShowUpdateRate={setShowUpdateRate} getAllRates={getAllRates} /> : null*/}
            {/*}*/}
        </div>
    )
}

export default ListRateComponent;
