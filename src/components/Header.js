import React,{ useEffect } from "react";
const Header = ({brandname}) => {
    useEffect(()=>{
        console.log("Header Loaded");
    });

    return (
        <div>
            {
            brandname && 
                 <p data-testid="brand">{brandname}</p>
            }
            <h1>Main Heading</h1>
            <h2>Sub Heading</h2>
            <h3>Sub title</h3>
        </div>
    )
}
export default Header;