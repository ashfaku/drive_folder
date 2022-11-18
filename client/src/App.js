//import './App.css';
import React, { useState, useEffect } from 'react';
import Folder from './Folder.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const SearchPage = ({ match, location }) => {
  console.log(match);
  console.log(location);
  return (
      <p>
        <strong>Query Params: </strong>
        {match}
      </p>
    );
}
async function callBackendAPI() {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};
function generateHTML(data, tab)
{
  const rows = [];
  const files = [];
  var firstChild = <div onClick={function(e) {
    var child = e.target.parentElement.children[1];
    if (child.style.display === 'none')
      child.style.display = 'block';
    else
      child.style.display = 'none';
  
  }} 
  style = {{ display: 'inline-block', cursor: 'pointer', color: 'red', marginLeft: tab}}>{data.name}</div>;
 // parent.appendChild(firstChild);
  //rows.push(<div style = {{ color: 'red', marginLeft: tab}}>{data.name}</div>);
  var children = data.children;
  for (let elem in children)
  {
    if (children[elem].children != null)
      rows.push(generateHTML(children[elem], tab + 50));
    else
    {
      var name = children[elem].name;
      if (name.substr(name.length - 3) === 'pdf')
      {
        var button = <button onClick = {function(e) {
            const filePath = children[elem].path;
            
          }
        } 
        style = {{display: 'block', marginLeft: tab + 50}}>{name}</button>;
       // button.setAttribute('path', children[elem].path);
        files.push(button);
      }
      else
        files.push(<div style = {{marginLeft: tab + 50}}>{name}</div>);
    }
  }
  for (let elem in files)
    rows.push(files[elem]);
  return (<div>
      {firstChild}
      <div style = {{display: 'none'}}>{rows}</div>

  </div>);
}
function App() {
  const [files, setFiles] = useState([]);
  const [routeList, setRoutes] = useState([<Route exact path = "/Cookbook" element = {<div>1</div>}/>]);
  var routes = [];

  var routeTags = [];
  useEffect(() => {
    callBackendAPI().then((files) => 
    {
      var children = files.files;
      var folder = <Folder info = {children} tab = {0} routes = {routes} />;
      setFiles(folder);
      for (let elem in routes)
        routeTags.push(<Route exact path = {routes[elem]} element = {<div>{elem}</div>}/>);
      for (let elem in routeTags)
        console.log(routeTags[elem].props.path);

    })
  }, []);
  
  return ( 
    <Router>
        <Routes>
            <Route exact path = "/" element = {<div>{files}</div>} />
            {routeList}
        </Routes>
    </Router>
  );

}
export default App;
