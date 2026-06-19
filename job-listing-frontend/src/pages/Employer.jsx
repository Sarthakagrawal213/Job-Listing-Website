import { useEffect, useState } from "react";
import api from "../services/api";

export default function Employer() {

const empty = {
profile: "",
description: "",
experience: "",
tech: ""
};

const [data, setData] = useState(empty);

const [jobs, setJobs] = useState([]);

const [editing, setEditing] = useState(null);

const load = async () => {

try{

const res =
await api.get(
"/alljobs"
);

setJobs(
res.data
);

}

catch(err){

console.log(err);

}

};

useEffect(()=>{

load();

},[]);

async function submit(e){

e.preventDefault();

try{

const payload={

id:
editing ?? 0,

profile:
data.profile,

description:
data.description,

experience:
Number(
data.experience
),

tech:
data.tech

};

if(editing===null){

await api.post(
"/addjob",
payload
);

alert(
"Job Added"
);

}

else{

await api.put(
`/${editing}`,
payload
);

alert(
"Job Updated"
);

}

setData(
empty
);

setEditing(
null
);

await load();

}

catch(err){

console.log(err);

alert(
"Request Failed"
);

}

}

function edit(job){

setEditing(
job.id
);

setData({

profile:
job.profile,

description:
job.description,

experience:
String(
job.experience
),

tech:
job.tech

});

}

async function remove(id){

try{

await api.delete(
`/${id}`
);

load();

}

catch(err){

console.log(err);

}

}

return(

<div className="employer">

<div className="editor">

<h1>

{

editing===null

?

"Post Job"

:

"Update Job"

}

</h1>

<form
onSubmit={submit}
style={{
display:"flex",
flexDirection:"column",
gap:"18px"
}}
>

<input
type="text"
placeholder="Job Profile"
value={data.profile}
onChange={(e)=>

setData({

...data,

profile:
e.target.value

})

}
/>

<textarea
placeholder="Description"
value={data.description}
onChange={(e)=>

setData({

...data,

description:
e.target.value

})

}
/>


<input
type="number"
placeholder="Experience"
value={data.experience}
onChange={(e)=>

setData({

...data,

experience:
e.target.value

})

}
/>


<input
type="text"
placeholder="Tech Stack"
value={data.tech}
onChange={(e)=>

setData({

...data,

tech:
e.target.value

})

}
/>


<button
type="submit"
>

{

editing===null

?

"Publish Job"

:

"Update Job"

}

</button>

</form>

</div>



<div className="list">

{

jobs.map((job)=>(

<div
className="job"
key={job.id}
>

<div>

<h3>

{job.profile}

</h3>

<p>

{job.description}

</p>

<div
className="tech"
>

{job.tech}

</div>

<p>

Experience:
{" "}
{job.experience}
{" "}
Years

</p>

</div>


<div
className="actions"
>

<button
className="edit"
onClick={()=>

edit(job)

}
>

Edit

</button>

<button
className="delete"
onClick={()=>

remove(
job.id
)

}
>

Delete

</button>

</div>

</div>

))

}

</div>

</div>

);

}
