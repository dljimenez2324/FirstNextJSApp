import React from "react";

interface Props {
    params: { id: number, photoid: number }
}

const PhotoPage = async ( { params: { id, photoid } }: Props) => {
    return (
        
            <div>PhotoPage {id} {photoid}</div>
    
    )
}

export default PhotoPage

// localhost:3000/products/grocery/dairy/milk
// there is a better way to do this