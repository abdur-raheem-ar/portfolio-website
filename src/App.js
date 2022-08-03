import React from  'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WriteRecommendation from './components/WriteRecommendation';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import { Provider } from './context';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />;
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/write-a-recommendation" component={ WriteRecommendation } />
          <Route exact path="/project/add" component={ AddProject } />
          <Route exact path="/blog/add" component={ AddBlog } />
          <Route exact path="/projects" component={ AllProjects } />
          <Route exact path="/blogs" component={ AllBlogs } />
          <Route exact path="/project/:id" component={ ProjectPage } />
          <Route exact path="/blog/:id" component={ BlogPage } />
          <Route component={NotFound}  />
        </Switch>
        <Footer  />;
      </BrowserRouter>
    </Provider>    
  );
}

export default App;
