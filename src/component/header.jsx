import React, { Fragment } from 'react'

export default function Header() {
    return (
        <Fragment>
            {/* start of breaking */}
            <div style={{display:'flex', justifyContent:'center', marginTop:'1em'}}>
                    <div className='box'>
                        <p style={{color:'white',fontSize:'0.7em',marginBottom:'0em',paddingBottom:'0em',marginLeft:'3em',position:'absolute'}}>35</p>
                        <h2 style={{color:'white',marginTop:'0em', paddingTop:'0em', position:'relative',marginLeft:'0.3em',top:'0.1em'}}>Br</h2>
                    </div>
                        <div>
                        <h2 style={{color:'white',marginBottom:'0em',marginTop:'0.1em'}}>eaking</h2>                        
                        </div>
            </div>
            {/* end */}
            {/* start of bad */}
            <div style={{display:'flex', justifyContent:'center', marginTop:'0em', marginLeft:'1.5em'}}>
                    <div className='box'>
                        <p style={{color:'white',fontSize:'0.7em',marginBottom:'0em',paddingBottom:'0em',marginLeft:'3em',position:'absolute'}}>56</p>
                        <h2 style={{color:'white',marginTop:'0em', paddingTop:'0em', position:'relative',marginLeft:'0.3em',top:'0.1em'}}>Ba</h2>
                        </div>
                        <div>
                        <h2 style={{color:'white',marginBottom:'0em',marginTop:'0.1em'}}>d</h2>
                        </div>
                        </div> 
            {/* end */}            
        </Fragment>
    )
}
