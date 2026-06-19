import { Link } from "react-router-dom";

export default function Navbar(){

return(

<nav className="navbar">

<div className="logo">

JobVerse

</div>

<div className="nav-links">

<Link to="/">

Home

</Link>

<Link to="/jobs">

Jobs

</Link>

<Link to="/employer">

Employer

</Link>

</div>

</nav>

);

}