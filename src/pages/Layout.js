import {Link} from 'react-router-dom';
export default function Layout(){
    return(
                <ul>
                    <li><Link to= "orange">Orange</Link></li>
                    <li><Link to= "green">Green</Link></li>
                    <li><Link to= "red">Red</Link></li>
                    <li><Link to= "purple">Purple</Link></li>
                </ul>       
    );
}