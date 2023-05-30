import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
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
                            <Card.Title>用户管理</Card.Title>
                            <Card.Text>
                                根据默认数据或。
                            </Card.Text>
                            <Button variant="primary" href="/admin/account">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>算法模型管理</Card.Title>
                            <Card.Text>
                                这里展示客户分析结果，如客户数量、转化率、留存率等。
                            </Card.Text>
                            <Button variant="primary" href="/admin/model">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>政策文件管理</Card.Title>
                            <Card.Text>
                                这里展示市场分析结果，如市场份额、竞争对手情况等。
                            </Card.Text>
                            <Button variant="primary" href="/admin/document">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>测度管理</Card.Title>
                            <Card.Text>
                                这里展示销售趋势图，如月度销售额走势、季度销售量走势等。
                            </Card.Text>
                            <Button variant="primary" href="/admin/rate">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>数据管理</Card.Title>
                            <Card.Text>
                                这里展示用户画像图，如不同用户群体的消费习惯、行为特征等。
                            </Card.Text>
                            <Button variant="primary" href="/admin/info">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer/>/
        </div>
    );
};

export default HomePage;
