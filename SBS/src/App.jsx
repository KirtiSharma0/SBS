import Header from "./component/Header";
import Product from "./component/Product";
import Productprop from "./component/Productprop";
import Event from "./component/Event";
import Conditionalrender from "./component/Conditionalrender";
import Listrender from "./component/Listrender"; 
import Nav from "./component/Nav";
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./Home";

 const App = ()=>{
  return (
   <>
   <BrowserRouter>

       <Nav/>
       
       <Routes>
        <Route path="/home" element ={<Home/>}></Route>
        <Route path="/listrender" element ={<Listrender/>}></Route>
       </Routes>
       </BrowserRouter>
       </>

      /* <Header/>

      <Product> <button></button></Product>

      <Productprop title = "Mobile" price="14k" discount = "5%"/>
      <Productprop title = " Pc" price="45k" discount = "15%"/>

      <Productprop title = "Tablet" price="22k" discount = "10%">  <button>btn</button> </Productprop>
      <Productprop title = "Gaming laptop" price="75k" discount = "30%"> <button>btn</button> </Productprop>

      <Event/>

      <Conditionalrender/>

      <Listrender/>
 

    </div> */
  )
 }

 export default  App ;