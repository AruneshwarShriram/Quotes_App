import React from "react";
import Index from "../comp";
import Nav from "../comp/nav";
import Random from "../comp/random";

const Home = ()=>{
    return(
        <div>
            <Nav/>
            
            <Random/>
            <Index/>
        </div>)
}
export default Home;
