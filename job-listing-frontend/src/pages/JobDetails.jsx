import {
useParams
}

from "react-router-dom";

import {
useEffect,
useState
}

from "react";

import api
from "../services/api";

export default function JobDetails(){

const{id}=useParams();

const[
job,
setJob
]

=
useState(null);

useEffect(()=>{

api

.get(

`/${id}`

)

.then(

r=>

setJob(
r.data
)

);

},[]);

if(!job){

return<h1>Loading...</h1>

}

return(

<div
className="details"
>

<div
className="details-card"
>

<h1>

{job.profile}

</h1>

<p>

{job.description}

</p>

<div
className="info"
>

<div>

Experience

<br/>

{job.experience}

Years

</div>

<div>

Tech

<br/>

{job.tech}

</div>

</div>

<button>

Apply Now

</button>

</div>

</div>

)

}