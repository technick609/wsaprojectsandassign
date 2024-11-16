import React from 'react'

const Button = () => {

    const buttons = [
        {label: "C", className:"clear-icon bg-icon"},
        {label: "DEL", className:"delete-icon bg-icon"},
        {label: "%", className:"percent-icon bg-icon"},
        {label: "/", className:"divide-icon bg-icon"},
        {label: "7"},
        {label: "8"},
        {label: "9"},
        {label: "*", className:"multiply-icon bg-icon"},
        {label: "4"},
        {label: "5"},
        {label: "6"},
        {label: "+", className:"add-icon bg-icon"},
        {label: "1"},
        {label: "2"},
        {label: "3"},
        {label: "-", className:"minus-icon bg-icon"},
        {label: "0", className:"zero"},
        {label: "."},
        {label: "=", className:"equals-icon bg-icon"},
    ];

  return (
    <>
            {/* <!----------- Button rows -----------> */}
    <section className="button-row">
        {buttons.map((btn, index)=>{
           return <button className={btn.className} key={index}>{btn.label}</button>
        })}
    </section>   
    </>
  )
}

export default Button