import React from 'react'
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <div>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">
                            首页
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2023 湘潭大学</p>
            </footer>

        </div>
    )
}

export default FooterComponent
