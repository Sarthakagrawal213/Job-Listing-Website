import {
useEffect,
useState
}

from "react";

import api
from "../services/api";

import JobCard
from "../components/JobCard";

import SearchBar
from "../components/SearchBar";

export default function Jobs(){

const[
jobs,
setJobs
]

=
useState([]);

const load=()=>{

api
.get(
"/alljobs"
)

.then(

r=>

setJobs(
r.data
)

)

};

useEffect(()=>{

load();

},[]);

const search=

(k)=>{

if(k===""){

load();

return;

}

api

.get(
`/search/${k}`
)

.then(

r=>

setJobs(
r.data
)

)

};

return(

<div
className="jobs-page"
>

<SearchBar

search=
{search}

/>

<h1>

Explore Jobs

</h1>

<div
className="grid"
>

{

jobs.map(

job=>

<JobCard

key={job.id}

job={job}

/>

)

}

</div>

</div>

)

}