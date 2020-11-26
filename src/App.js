import React,{useState,useEffect} from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Recipe from './components/Recipe'
import Axios from 'axios'

export default function App(){
  const [data,setData]=useState([])
  const[searchValue,setSearchValue]=useState("best") 

  //static getDerivedStateFromProps(){
     //return null}
    //this method is executed each time just before the render method!rarely used!
    //no need to target the state!!!
    //if you want to change state before render method! like initial state!
  
  
  const searchData=(e)=>{
    e.preventDefault();
    getData();
  }
  const getData=()=>{
    // fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    // .then(res=>res.json())
    // .then(result=>setData(result.hits))
    
    Axios.get(`https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    .then(result=>setData(result.data.hits))
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <HashRouter>
    <Switch>
    <Route exact path='/'>
      <>
    <div className="container bg-dark text-white">
     <h2>Recipe App</h2>
     <form onSubmit={searchData}>
       <label>
         <input type="text" onChange={(e)=>setSearchValue(e.target.value)}/>
       </label>
       <input type="submit" value="search"/>
     </form>
    </div>
    <div className="container">
    <Wrapper data={data}/>
    </div>
    </>
    </Route>
    {/* <Route path="/recipe/:id" render={(props)=><Recipe {...props} data={data}/>}/> */}

    <Route path="/recipe/:id" component={Recipe}/>

    {/* you get the id like props.match.params.id(the last one is how you called it!) */}
    </Switch>
    </HashRouter>
    // hashRouter user side web site icin kullanilir, cunku eger browser routerkullanirsan url e birsey eklendigi zaman o sayfaya http request gonderir, for he websites which only is in client side, wont want to send an http request to anywhere else, use HashRoter!!
  )
}
