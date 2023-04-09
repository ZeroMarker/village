import React from "react";

export default function Footer() {
    return(
        <div>
            <div style={{ width: 300, margin: "0 auto", padding: "20px 0" }}>
                <img src="https://pic.imgdb.cn/item/64192375a682492fccb72b8e.png"  />
                <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37132902372971"
                    style={{
                        display: "inline-block",
                        textDecoration: "none",
                        height: 20,
                        lineHeight: 20
                    }}
                    className="link link-hover"
                >
                    <img src="" style={{ float: "left" }} />
                    <p
                        style={{
                            // float: "right",
                            // height: 20,
                            // lineHeight: 20,
                            margin: "0px 0px 0px 5px",
                            color: "#939393"
                        }}
                    >
                        鲁公网安备 37132902372971号
                    </p>
                </a>
            </div>
            <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                className="link link-hover"
                style={{
                    textDecoration: "none",
                    color: "#939393"
                }}>
                鲁ICP备2023006928号
            </a>
        </div>
    )
}