import React,{useState,useEffect} from 'react'
// import NoticeService from '../../services/NoticeService'
import Header from "../../layouts/Header";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";

const Notice = () => {

    // define notices state and get a methed to update notices
    const [notices, setNotices] = useState([])
    const navigate = useNavigate();

    const goNotice = (noticeId) => {
        navigate(`/notice/${noticeId}`);
    }
    // get notice data from backend
    const getAllNotices = () =>{
        // NoticeService.getAllNotices().then((response) => {
        //     // console.log(response.data)
        //     setNotices(response.data);
        // }).catch(error=>{
        //     console.log(error)
        // })
    }

    useEffect(() => {

        getAllNotices();


    }, [])


    return (
        <div className="" style={{position:"relative"}}>
            <Header/>
            <Card>

                <Card.Body>
                    <Card.Title className="text-center">
                        政策文件
                    </Card.Title>
                    <ul>
                        {
                            notices.map(notice=>
                                <li key={notice.noticeId} className="list-group-item">
                                    <script>
                                        // 如果标题长度大于截取长度，就截取一部分并显示省略号
                                        if (notice.title.length > 10) {
                                        notice.title = notice.title.substring(0, 25) + "..."
                                    }
                                    </script>
                                    <a className="link-primary link-offset-2 text-decoration-none w-75" onClick={()=>goNotice(notice.noticeId)}>{notice.title}</a>
                                    <span>{notice.time}</span>

                                </li>
                            )
                        }
                    </ul>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Notice;
