import React from 'react';

import Photo from './Photo';

const PhotoContainer = (props) => {

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {/* mapping through the photos array and generating a photo component and passing the component its respective data */}
                {
                    props.photos.map( (photo, index) => (
                        <Photo data={photo} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default PhotoContainer;