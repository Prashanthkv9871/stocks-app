import React, {useState,useEffect} from 'react';
import './Stock.css';
import axios from 'axios';

const Stock = () => {
    const [stocks,setStocks] = useState([]);
    
    useEffect(()=>{
        axios
        .get('./stocks.json')
        .then((res)=> setStocks(res.data))
        .catch((err)=>{
            console.log(err)
        })
    },[]);

  return (
    <>
    <h1 className='header'>STOCKS DATA</h1>
    <div className='container'>
        <table>
            <thead>
                <tr>
                    <th style={{textAlign:"left"}}>STOCK</th>
                    <th style={{width:"100px"}}>DATE</th>
                    <th>HIGH</th>
                    <th>LOW</th>
                </tr>
            </thead>

            <tbody>
                {
                    stocks.map((stock,index)=>{
                        return(
                            <tr key={index}>
                                <td style={{textAlign:"left"}}>{stock.Stock}</td>
                                <td>{stock.date}</td>
                                <td>{stock.high}</td>
                                <td>{stock.low}</td>
                            </tr>
                        )
                    }) 
                }
            </tbody>            
        </table>        
    </div>
    </>
  )
}

export default Stock;