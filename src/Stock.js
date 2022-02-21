import React from 'react';
import Stocks from './stocks.json';
import './Stock.css';

const Stock = () => {
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
                    Stocks.map((stock,index)=>{
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