import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linkContainerRef = useRef(null);  //ref for the container
    const linkRef = useRef(null);            //ref for the links

    useEffect(() => {
        const linksHeight = linkRef.current.getBoundingClientRect().height;  // return height values by passing height
        
        if(showLinks){
            linkContainerRef.current.style.height =`${linksHeight}px`
        }
        else{
            linkContainerRef.current.style.height = '0px'
        }

    },[showLinks])

  return (
  <nav>
      <div className="nav-center">
          <div className="nav-header">
              <img src={logo} alt="logo" />
              <button className='nav-toggle'>
                  <FaBars onClick={()=>setShowLinks(!showLinks)}/>
              </button>
          </div>

          {/* // menu-icons */}
         
          
          <div className='links-container' ref={linkContainerRef}>
              <ul className="links" ref={linkRef}>
                {links.map((link)=>{
                    const{id,url,text} = link
                    return( 
                    <li key={id}>
                        <a href={url}>{text}</a>
                    </li>
                )})}
              </ul>
          </div>
         

          {/* //social-icons */}
        <ul className="social-icons">
            {social.map((sociali)=>{
                const {id,url,icon} = sociali
                return (
            <li key={id}>
                <a href={url}>
                    <FaTwitter/>
                </a>
                </li>

                )
            })}
        </ul>
      </div>
  </nav>
  )}

export default Navbar