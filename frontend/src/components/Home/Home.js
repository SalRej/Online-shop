import React ,{useState , useEffect} from 'react'

function Home() {

    useEffect(()=>{
        //fetch data;
        fetch('http://localhost:5000/home')
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
        })
    },[])

    return (
    <div className='homa-page'>
        HOme
    </div>
    )
}

export default Home