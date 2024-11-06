const Listrender = ()=>{
    let Students = ["rohan" , "pradeep" , "riya" , "priya"]  
    
    return (
        <>
        <h1> Students List </h1>
        <ul>
            <li>{Students[0]}</li>
            <li>{Students[1]}</li>
            <li>{Students[2]}</li>
            <li>{Students[3]}</li>
        </ul>
        </>
       );
}

export default Listrender; 