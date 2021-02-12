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
    loading: false,
    value: "oceans",
    oceans: [],
    mountains: [],
    trees: [],
    photos: []
  }
 }

  // This is the function for the search bar that uses axios to fetch data and update the photos state
  changeData = async (searchTerm) => {
    const data = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`);
    this.setState({
      ...this.state,
      value: searchTerm,
      photos: data.data.photos.photo
    })
  }

  // This method handles the display of the loading screen
  handleLoading = () => {
    this.setState({
      ...this.state,
      loading: true
    })
    setTimeout(() => {
      this.setState({
        ...this.state,
        loading: false
      })
    }, 2000)
  }

  // In this componentDidMount Function, the main data of the three routes is retrieved and stored in state
  componentDidMount = async () => {
    const oceans = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="oceans"&per_page=24&format=json&nojsoncallback=1`);
    this.setState({
      ...this.state,
      value: "oceans",
      oceans: oceans.data.photos.photo
    })

    const mountains = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="mountains"&per_page=24&format=json&nojsoncallback=1`);
    this.setState({
      ...this.state,
      value: "mountains",
      mountains: mountains.data.photos.photo
    })

    const trees = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="trees"&per_page=24&format=json&nojsoncallback=1`);
    this.setState({
      ...this.state,
      value: "trees",
      trees: trees.data.photos.photo
    })
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>

        {/* The search bar was put within a route in order to pass down the history object */}
        <Route path="/" render={(props) => <SearchBar history={props.history} changeData={this.changeData} handleLoading={this.handleLoading}/>} />
        
        <NavBar />

        <Switch>
          <Route exact path="/" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.oceans} /> } />
          <Route path="/oceans" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.oceans} />} />
          <Route path="/mountains" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.mountains} />} />
          <Route path="/trees" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.trees} />} />
          
          <Route exact path="/:searchValue" render={() => <PhotoContainer loading={this.state.loading} 
              value={this.state.value} 
              photos={this.state.photos} 
              changeData={this.changeData} />} 
          />
          
          {/* 404 error routes*/}
          <Route path="/:anything/:anything" component={NotFound} />
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
