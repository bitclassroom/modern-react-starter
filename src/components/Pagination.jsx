import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
    return (
        <div className="row center">
            <ul class="pagination">
                <li class="disabled">
                    <Link to="/page/3">
                        <i class="material-icons">chevron_left</i>
                    </Link>
                </li>
                <li class="active">
                    <Link to="/page/3">1</Link>
                </li>
                <li class="waves-effect">
                    <Link to="/page/3">2</Link>
                </li>
                <li class="waves-effect">
                    <Link to="/page/3">3</Link>
                </li>
                <li class="waves-effect">
                    <Link to="/page/3">4</Link>
                </li>
                <li class="waves-effect">
                    <Link to="/page/3">5</Link>
                </li>
                <li class="waves-effect">
                    <Link to="/page/3">
                        <i class="material-icons">chevron_right</i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
