import ModelSelect from "./ModelSelect";
import Rate from "./Rate";
import Header from "../../layouts/Header";
import {Card, Col, Row} from "react-bootstrap";
import React from 'react'

import DataVisualization from "./DataVisualization";
import Info from "./Info";
import Footer from "../../layouts/Footer";

const Analysis = () => {





    return (
        <div>
            <Header/>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    数字乡村信息基础设施建设水平评价指标体系
                                </Card.Title>
                                <Row>
                                    <Col>
                                        <img src="https://www.ciocso.com/wp-content/uploads/2021/12/2021122802463851-480x300.jpeg" alt="" className="rounded h-100 w-100"/>

                                    </Col>
                                    <Col>
                                        <img src="https://cto-static.xiniu.com/ueditor/upload/image/20210428/1619574337092010006.jpg" alt="" className="rounded h-100 w-100"/>
                                    </Col>
                                    <Col>
                                        <img src="https://imgs.rednet.cn/data/87/IMAGE_TENANT_LIB/IMAGE/7012385/2022/11/25/9667012ff02943968ec3f3ba4aa4fc4d.jpg" alt="" className="rounded w-100 h-100"/>

                                    </Col>
                                    <Col>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96ds3cLPLAR2dDDJVmkfg2vwY6f6Oh7LPrGvVmGATMOQMp-pbhIUOcFot_FNab5T4CCM&usqp=CAU" alt="" className="rounded w-100 h-100"/>

                                    </Col>
                                    <Col>
                                        <img src="https://s.secrss.com/anquanneican/b487acc5e0d107f291a68dd651a719b7.jpg" alt="" className="rounded w-100 h-100"/>

                                    </Col>

                                </Row>
                                <Row>
                                    <Col><h4>网络基础设施</h4></Col>
                                    <Col><h4>数字产业转型</h4></Col>
                                    <Col><h4>公共服务设施</h4></Col>
                                    <Col><h4>生态环境建设</h4></Col>
                                    <Col><h4>安全与防控</h4></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                        乡村网络基础设施包括电信网络和广播电视网络等。网络基础设施应延伸到行政村，具备为农村居民提供网络接入能力，为乡村智能感知系统部署提供网络连接基础。基础电信运营商、广电企业分别是电信服务和广播电视服务的市场主体，应按照国家有关规定履行电信普遍服务和广播电视基本公共服务城乡均等化的义务。
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>以移动互联网、大数据、云计算、物联网和人工智能为代表的数字技术蓬勃兴起，为传统农业转型升级和乡村治理现代化创造了前所未有的机遇。将数字技术广泛融入农业产业发展的各环节，利用数字技术服务乡村发展和治理，已成为世界潮流。部分国家和地区在开展数字乡村建设和智慧农业方面的实践起步较早，形成了具有借鉴价值的发展模式和路径。
                                        </p>
                                    </Col>
                                    <Col><p>构建服务“三农”的公共数据平台，全面支撑数字乡村业务和应用。融合结构化和非结构化数据，着重解决数字乡村相关数据的汇聚、治理和应用问题。平台实现数字乡村相关数据的全汇聚。利用共享交换体系横向融通农业农村、商务、民政、公安、市场监管、自然资源等相关部门数据，汇聚形成省、市、县、乡、村各级有
                                        关农村生产、生活和管理的数据集。</p></Col>
                                    <Col><p>乡村绿色生活主要包括农村人居环境综合监测、农村饮用水水源水质监测等，通过云计算、物联网、人工智能、无人机、高清视频监控等信息技术手段，对乡村居民生活空间、生活用水等进行监测，为农村人居环境综合整治提供依据。</p></Col>
                                    <Col><p>加强数字乡村建设关键信息基础设施系统安全防护，落实等级保护制度，持续展开信息风险安全评估和安全检查。推动重要系统与网络安全设施同步设计、同步建设、同步运行、同步管理。落实网络安全责任制，明确网络运营机构主
                                        体责任。督促网络运营者依法开展网络定级备案、安全建设整改、等级测评和自查等工作。</p></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Card.Title>
                    {/*<ModelSelect/>*/}
                    <Info/>
                    <Rate/>
                    <DataVisualization/>
                </Card.Body>
            </Card>
            <Footer/>
        </div>

    )
}

export default Analysis;