import React from 'react'

function HomePage() {
    const currentUserString = localStorage.getItem("currentUser");
    const currentUser = currentUserString && JSON.parse(currentUserString)
  return (
    <div className='w-screen h-screen bg-black'>
        
    </div>
  )
}

export default HomePage