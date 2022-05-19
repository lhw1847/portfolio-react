import { Link } from "react-router-dom";

function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <a href="mailto:lhw1847@gmail.com">lhw1847@gmail.com</a>
            </div>
            <div>
                <h4>Kakao</h4>
                <Link to="#">LeeHyunwoo</Link>
            </div>
            <div>
                <h4>soail</h4>
                <ul>
                    <li><Link to="#">Youtube</Link></li>
                    <li><Link to="#">Instargram</Link></li>
                    <li><Link to="#">Github</Link></li>
                    <li><Link to="#">Cafe</Link></li>
                    <li><Link to="#">Reference</Link></li>
                    <li><Link to="#">Tutorials</Link></li>
                    <li><Link to="#">CSS</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;