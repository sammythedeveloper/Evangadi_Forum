import React from 'react'
import { Link } from 'react-router-dom'

const Explained = () => {
  return (
      <div>
              <div className=" mt-5 pb-5 flex items-center justify-evenly shadow-xl ">
        <div>
          <img
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
            alt=""
          />
        </div>
        <div className=" flex items-center ml-40 hover:text-orange-500 ">
          Home
        </div>
        <div className="hover:text-orange-500">How it Works</div>
        <Link to='/' >
        <button className=" w-[150px] h-[30px] bg-blue-600 text-blue-50  text-xs font-medium hover:bg-orange-500 rounded-lg ">
          SIGN IN
          </button>
          </Link>
      </div>
    </div>
  )
}

export default Explained