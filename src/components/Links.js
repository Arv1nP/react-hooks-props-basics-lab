import React from "react"
import user from "../data/user"

function Links(prop){
    return(
        <div>
            <a href={prop.links.github}>{prop.links.github}</a>
            <a href={prop.links.linkedin}>{prop.links.linkedin}</a>
        </div>
        
    )
}

export default Links;