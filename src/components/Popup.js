import React from 'react'

function Popup({selected , closepopup}) {
    return (
       <section className="popup">
         <div className="content">
            <h2>{selected.Title} <span>({selected.Year})</span></h2>
            <p className="rating">Ratings : {selected.imdbRating}</p>
             <div className="plot">
               <img src={selected.Poster} alt="Avataar"/>
               <p>{selected.Plot}</p>
             </div>
             <button className="close" onClick={closepopup}>Close</button>
         </div>
       </section>
    )
}

export default Popup
