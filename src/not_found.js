import { Link } from 'react-router-dom';

export default function NotFound() {
    return(
        
        <div style={{
            height: '100vh',
            backgroundImage: `url(${require("./not_found.png")})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
        }}>
            <div style={{
                maxWidth: '600px',
                margin: '60px'
            }}>

                
                <h1 style={{
                    maxWidth: '600px',
                    position: 'relative',
                    fontSize: '60px',
                    fontWeight: '700',
                    color: "#00baf0",
                    background: '#000',
                }}>
                    OOPS!!! <br />Page not found
                </h1>
                <p style={{
                    position: 'relative',
                    fontSize: '20px',
                    margin: '20px 0 40px',
                    maxWidth: '85%',
                    color: '#fff',
                }}>Go back to learn about &nbsp;
                <Link to='/' style={{
                    textDecoration: 'none',
                    color: '#00baf0',
                }}>
                     nitay newman
                </Link>
                </p>
            </div>
        </div>
    );
}


