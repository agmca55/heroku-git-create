import {Link} from 'react-router-dom';
function Contact()
{
    return(

        <div>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

<hr></hr>
<h1>This is Contact page</h1>
        </div>
       
    );
}

export default Contact;