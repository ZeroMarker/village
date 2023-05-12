import React,{useState,useEffect} from 'react'
import RateService from '../../services/RateService'

import {CSVLink} from "react-csv";
import {Card} from "react-bootstrap";

const Rate = () => {

    // define Rates state and get a method to update Rates
    const [rates, setRates] = useState([])

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
    }, [rates])



    return (
        <div className="" style={{position:"relative"}}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        测度结果
                    </Card.Title>
                    <Card.Header>
                        <CSVLink
                            data={rates}
                            filename={"测度结果.csv"}
                            className="btn btn-primary"
                        >下载测度结果</CSVLink>
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
                            </tr>
                            </thead>
                            <tbody>
                            {
                                rates.map(Rate=>
                                    <tr key={Rate.rateId}>
                                        <td>{Rate.rateName}</td>
                                        <td>{Rate.network}</td>
                                        <td>{Rate.industry}</td>
                                        <td>{Rate.service}</td>
                                        <td>{Rate.ecosystem}</td>
                                        <td>{Rate.security}</td>
                                        <td>{Rate.overall}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Rate;
