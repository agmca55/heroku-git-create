import {Link} from 'react-router-dom';
function Home()
{
    return(

        <div>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

<hr></hr>
<h1>This is Home page</h1>
        </div>
       
    );
}

export default Home;