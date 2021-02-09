import React from 'react';

import Photo from './Photo';

const PhotoContainer = (props) => {

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
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