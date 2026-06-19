import { useNavigate } from "react-router-dom";

export default function Home() {

const navigate = useNavigate();

return (

<div className="home-page">

<section className="hero-section">

<div className="hero-content">

<div className="hero-tag">

Modern Hiring Platform

</div>

<h1>

Find your next career move.

</h1>

<p>

Browse opportunities or manage job postings through a modern and clean experience.

</p>

<div className="hero-actions">

<button
onClick={() => navigate("/jobs")}
>

Explore Jobs

</button>

<button

className="secondary-btn"

onClick={() => navigate("/employer")}
>

Post Jobs

</button>

</div>

</div>

<div className="hero-panel">

<div className="panel-card">

<h3>

10k+

</h3>

<span>

Active Listings

</span>

</div>

<div className="panel-card">

<h3>

500+

</h3>

<span>

Companies

</span>

</div>

<div className="panel-card">

<h3>

24h

</h3>

<span>

Average Response

</span>

</div>

</div>

</section>

</div>

);

}