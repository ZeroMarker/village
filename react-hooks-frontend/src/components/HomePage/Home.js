import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Header from "../../layouts/Header";
import FooterComponent from "../../layouts/FooterComponent";

const HomePage = () => {
    return (
        <div>
            <Row className="mt-4">
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>水平测度</Card.Title>
                            <Card.Text>
                                这里展示销售分析结果，如销售额、销售量、利润率等。
                            </Card.Text>
                            <Button variant="primary" href="/analysis">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>算法模型</Card.Title>
                            <Card.Text>
                                这里展示客户分析结果，如客户数量、转化率、留存率等。
                            </Card.Text>
                            <Button variant="primary" href="/model">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>政策文件</Card.Title>
                            <Card.Text>
                                这里展示市场分析结果，如市场份额、竞争对手情况等。
                            </Card.Text>
                            <Button variant="primary" href="/document">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>系统公告</Card.Title>
                            <Card.Text>
                                这里展示销售趋势图，如月度销售额走势、季度销售量走势等。
                            </Card.Text>
                            <Button variant="primary" href="/notice">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>用户反馈</Card.Title>
                            <Card.Text>
                                这里展示用户画像图，如不同用户群体的消费习惯、行为特征等。
                            </Card.Text>
                            <Button variant="primary" href="/request">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <FooterComponent/>
        </div>
    );
};

export default HomePage;
