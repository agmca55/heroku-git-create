import {Link} from 'react-router-dom';

function About()
{

    return(

        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <h1>This is About page</h1>
            <hr></hr>
        </div>
     
    );
}

export default About;