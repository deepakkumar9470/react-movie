import React from 'react'
import Result from './Result'
function Results({ results , openpopup}) {
    return (
        <section className="results">
             {
                 results.map(itemresult=>(
                     <Result 
                     key={itemresult.imdbID} 
                     result = {itemresult}
                     openpopupmodal ={openpopup}
                     />
                 ))
             }
        </section>
    )
}

export default Results
