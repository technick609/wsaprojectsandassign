import React from 'react'


const Header = () => {

  const lists = ["Home", "Gallery", "Services", "Contact Us"];

  return (
    <>
    <div className='nav-bar'>
        <div className='home-pg'>Home Page</div>
        <ul>
            {lists.map((index)=>{
              return <li>{index}</li>
            })}
        </ul>
    </div>
    </>
  )
}

export default Header