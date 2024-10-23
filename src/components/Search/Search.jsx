import React from "react";
import './Search.css'

function Search(){
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text"  className="search-box" placeholder="Find a user"/>
            </div>
            {/* <div className="userChat">
                <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div> */}
        </div>
    )
}

export default Search