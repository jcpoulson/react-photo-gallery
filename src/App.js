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
    photos: []
  }
 }

  componentDidMount() {
    this.changeData("Oceans");
  }

  // This is the main data fetching function that uses axios to fetch data and update application state

  changeData = async (searchTerm) => {
    const data = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`);
    this.setState({
      value: searchTerm,
      photos: data.data.photos.photo
    })
  }

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

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        {/* The search bar was put within a route in order to pass down the history object */}
        <Route path="/" render={(props) => <SearchBar history={props.history} changeData={this.changeData} handleLoading={this.handleLoading}/>} />
        
        <NavBar changeData={this.changeData} />

        <Switch>
          <Route exact path="/" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.photos} /> } />
          <Route path="/oceans" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.photos} />} />
          <Route path="/mountains" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.photos} />} />
          <Route path="/trees" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.photos} />} />
          <Route exact path="/:searchValue" render={() => <PhotoContainer loading={this.state.loading} photos={this.state.photos} />} />
          
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
