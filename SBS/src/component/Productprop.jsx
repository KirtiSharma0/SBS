const Productprop = (props)=>{
    return (
        <> 
         <h2>{props.title}</h2> 
         <h3> Price : {props.price}</h3> 
         <p> Discount till Diwali Sale : {props.discount }</p>
         {props.children }
        </>
    );
}
  
export default Productprop ;