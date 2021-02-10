import {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// Components
import NavBar from './components/NavBar';
import PhotoContainer from './components/PhotoContainer';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFound';

class App extends Component {

  // Application state is stored here, with the value being the search term and the photos array being the photos

 constructor() {
   super();
   this.state = {
    value: "oceans",
    photos: []
  }
 }

  componentDidMount() {
    this.changeData();
  }

  // This is the main data fetching function that uses axios to fetch data and update application state

  changeData = async (searchTerm) => {
    const data = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`);
    this.setState({
      value: searchTerm,
      photos: data.data.photos.photo
    })
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <SearchBar changeData={this.changeData} />
        <NavBar changeData={this.changeData}/>
        <Switch>
          <Route exact path="/" render={() => <PhotoContainer photos={this.state.photos} /> } />
          <Route path="/oceans" render={() => <PhotoContainer photos={this.state.photos} />} />
          <Route path="/mountains" render={() => <PhotoContainer photos={this.state.photos} />} />
          <Route path="/trees" render={() => <PhotoContainer photos={this.state.photos} />} />
          <Route path="/:searchValue" render={() => <PhotoContainer photos={this.state.photos} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
