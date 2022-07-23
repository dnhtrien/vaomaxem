import React from "react";
const TagPoke = (pros) => {
    console.log(pros)
    return (
        <div className="tagpoke">
            <ul>
                <p>{pros.name}</p>
                <p>{pros.number}</p>
            </ul>
            <h1>{pros.children}</h1>
        </div>
    )
}
export default TagPoke;
