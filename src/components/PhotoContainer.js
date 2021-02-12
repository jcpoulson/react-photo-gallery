import React, { Component } from 'react';

import Photo from './Photo';
import NoResults from './NoResults';
import Loading from './Loading';

class PhotoContainer extends Component {


    // mapping through the photos array and generating a photo component and passing the component its respective data
    displayFetchedPhotos = () => {
        return this.props.photos.map( (photo, index) => (
            <Photo data={photo} key={index}/>
        ))
    }

    
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
    
                    { /* if the application states loading value is true, display the loading component, if not pass */}
                    { this.props.loading === true ? <Loading /> : null }
    
                <ul>
    
                    {/* ternary operator, if the data recieved equals zero, render the NoResults Component. If not display the photos */}
                    { this.props.photos.length === 0 ? <NoResults /> : this.displayFetchedPhotos() }
                    
                </ul>
            </div>
        )
    }
}

export default PhotoContainer;