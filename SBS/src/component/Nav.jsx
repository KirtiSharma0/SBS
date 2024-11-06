 import { Link } from "react-router-dom";
 
 const Nav =()=>{
     return(
      <div>
      <li><Link to="/home">home </Link></li>
      <li> <Link to="/home">home </Link></li> 
      <li> <Link to="/home">home </Link></li> 
      {/* <a href="#">hOME</a>
      <a href="#">Student list</a>
      <a href="#">Add new student</a> */}
      </div>
     );
    }

 export default Nav;