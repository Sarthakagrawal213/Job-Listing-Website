import {
Routes,
Route
}
from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Employer from "./pages/Employer";

function App(){

return(

<>
<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/jobs"
element={<Jobs/>}
/>

<Route
path="/jobs/:id"
element={<JobDetails/>}
/>

<Route
path="/employer"
element={<Employer/>}
/>

</Routes>

</>

)

}

export default App;