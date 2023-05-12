import React, {useEffect, useState} from 'react';
import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip
} from 'recharts';
import RateService from "../../services/RateService";
import {Card} from "react-bootstrap";


const DataVisualization = () => {

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
        <Card>
            <Card.Body>
                <Card.Title className="text-center">
                    测度数据可视化
                </Card.Title>
                <Card.Text>
                    <BarChart width={500} height={500} data={rates} >
                        <CartesianGrid />
                        <XAxis dataKey="rateName" />
                        <YAxis />
                        <Tooltip

                            cursor={false}
                        />
                        <Bar name="网络基础设施" dataKey="network" stackId="a" fill="#8884d8" />
                        <Bar name="数字产业转型" dataKey="industry" stackId="a" fill="#32229d" />
                        <Bar name="公共服务建设" dataKey="service" stackId="a" fill="#86dc9d" />
                        <Bar name="生态环境保护" dataKey="ecosystem" stackId="a" fill="#16779d" />
                        <Bar name="安全防控" dataKey="security" stackId="a" fill="#dc119d" />
                    </BarChart>
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default DataVisualization;