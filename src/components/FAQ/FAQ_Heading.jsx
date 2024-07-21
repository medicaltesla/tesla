import React, { FC } from 'react'

const FAQ_Heading = ({ heading, para }) => {
  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
      <div className="heading_container heading_center">
        <h2 style={
                                {fontSize:"28px"}
                            }>{heading}</h2>
        <p>{para}:</p>
      </div>
    </div>
  )
}

export default FAQ_Heading;