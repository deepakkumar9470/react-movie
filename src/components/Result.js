import React from 'react'

function Result( { result , openpopupmodal}) {
    return (
        <div className="result" onClick={()=>openpopupmodal(result.imdbID)}>
          <img src={result.Poster} alt="Avataar"/>
          <h3>{result.Title}</h3>
            
        </div>
    )
}

export default Result
