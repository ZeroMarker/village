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
                            <Card.Title>水平测度</Card.Title>
                            <Card.Text>
                                根据默认数据或用户添加数据进行水平测度。
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
                                算法模型展示，为用户提供算法模型详细介绍。
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
                                政策文件展示，提供数字乡村信息基础设施建设相关政策文件。
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
                            <Card.Title>个人中心</Card.Title>
                            <Card.Text>
                                个人信息查看编辑。
                            </Card.Text>
                            <Button variant="primary" href="/profile">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>管理后台</Card.Title>
                            <Card.Text>
                                数字乡村信息基础设施水平测度系统管理后台
                            </Card.Text>
                            <Button variant="primary" href="/admin">查看详情</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer/>/
        </div>
    );
};

export default HomePage;
