import React,{useState,useEffect} from 'react'
import DocumentService from '../../services/DocumentService'
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";

const Request = () => {



    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>

                <Card.Body>
                    <Card.Title className="text-center">
                        用户反馈
                    </Card.Title>

                </Card.Body>
            </Card>

        </div>
    )
}

export default Request;
