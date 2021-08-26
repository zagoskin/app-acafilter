import React from 'react';
import scimagoLogo from '../../images/scimagoLogo.png';


export default function ScimagoCard({content}){

  return (
    <div className="card--scimago">
      <div className="card--image--container">
        <a href={content.error ? `https://www.scimagojr.com/` 
          : content.journalURL }>
          <img className="card--scimago--image"
            src={scimagoLogo}
            alt='scimago'
          />
        </a>
      </div>
      <div className="card--data--container">
      {content.error ?
          <div className="card--doaj--text--warning">
            No hallado en Scimagojr
          </div>
       
        : 
        <div className="card--scimago--info--panel">
          <div id="embedGraph" className="card--scimago--info" >
            <div className="card--scimago--info--embed" dangerouslySetInnerHTML={{ __html: content.embedString }}>
            </div>        
          </div>
          <div className="card--scimago--info">
            <div className="card--scimago--info--title">H-INDEX</div>
            <div className="card--scimago--info--data">{content.hIndex}</div>      
          </div>
          <div className="card--scimago--info">
            <div className="card--scimago--info--title">COBERTURA</div>
            <div className="card--scimago--info--data">{content.coverage}</div>      
          </div>
          <div className="card--scimago--info">
            <div className="card--scimago--info--title">PAÍS</div>
            <div className="card--scimago--info--data">{content.country}</div>      
          </div>
        </div>
      }
      </div>

    </div>
  )
}
