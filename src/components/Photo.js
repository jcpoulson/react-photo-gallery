import React from 'react';

const Photo = (props) => {

    // The photo data is passed down through props and this component returns a dynamically generated photo
    let photo = props.data;

    return (
        <li>
            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/>
        </li>
    )
}

export default Photo;