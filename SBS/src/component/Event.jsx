const Event = ()=>{

  const demo = ()=>{
    console.log("button clicked")
  }

    return(
    <div>
        <p>hello we are now undrestanding event handling</p>
        <button onClick = {demo}>proceed</button>
    </div>
    );
}

export default Event ;