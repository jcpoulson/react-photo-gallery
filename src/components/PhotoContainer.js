import React from 'react';

import Photo from './Photo';
import NoResults from './NoResults';

const PhotoContainer = (props) => {

    const controlDisplayContent = () => {
        if (props.photos.length === 0) {
            return <NoResults />
        } else {
            props.photos.map( (photo, index) => (
                <Photo data={photo} key={index}/>
            ))
        }
    }

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