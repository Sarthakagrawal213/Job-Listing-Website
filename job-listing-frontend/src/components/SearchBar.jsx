import {useState} from "react";

export default function SearchBar({

search

}){

const[
keyword,
setKeyword
]

=
useState("");

return(

<div className="search">

<input

placeholder=
"Search jobs..."

value=
{keyword}

onChange={(e)=>

setKeyword(
e.target.value
)

}

/>

<button

onClick={()=>

search(
keyword
)

}

>

Search

</button>

</div>

)

}