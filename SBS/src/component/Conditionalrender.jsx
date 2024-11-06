const Conditional = ()=>{
      
   let islogin = false;

   if(islogin){
    return(
        <div>
            <h1>condition true</h1>  
            <button>logout</button>
        </div>
    );
   }

   else {
    return <Login/>
   }
}    

const Login = ()=>{
    return(
      <div>hello</div>
    );
}

export default Conditional;