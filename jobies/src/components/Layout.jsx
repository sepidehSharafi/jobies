import {Link} from 'react-router-dom';
const Layout = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Layout;