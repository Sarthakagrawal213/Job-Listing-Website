import { useNavigate } from "react-router-dom";

export default function JobCard({job}){

const navigate=
useNavigate();

return(

<div

className="job-card"

onClick={()=>

navigate(

`/jobs/${job.id}`

)

}

>

<div className="card-top">

<h2>

{job.profile}

</h2>

<span>

{job.experience}+ yrs

</span>

</div>

<p>

{job.description}

</p>

<div className="stack">

{

job.tech

.split(",")

.map(

(item,index)=>

<div
key={index}
>

{item}

</div>

)

}

</div>

</div>

);

}