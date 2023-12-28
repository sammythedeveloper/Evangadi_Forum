import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
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
      <div className=" h-[600px] flex  drop-shadow-sm ">
        <div className="  w-[450px] h-[400px] ml-48 mt-24 shadow-2xl rounded-md text-center text-xs ">
          <p className=" text-center text-lg  font-semibold mt-8 ">
            Join the network
          </p>
          <p className="text-center text-xs  ">
            Already have an account?
            <Link to="/">
              <a className=" text-orange-500  hover:underline " href="">
                Sign in
              </a>
            </Link>
          </p>
          <form>
            <input
              className=" border border-slate-300 w-[350px] h-[40px] mt-8 rounded "
              type="email"
              placeholder="Email address "
            />{" "}
            <br />
            <div className=" col-2 space-x-12 ">
              <input
                className=" border border-slate-300 w-[150px] h-[40px] mt-3 rounded  "
                type="text"
                placeholder="First name"
              />
              <input
                className=" border border-slate-300 w-[150px] h-[40px] mt-3 rounded  "
                type="text"
                placeholder="Last name"
              />
            </div>
            <input
              className=" border border-slate-300 w-[350px] h-[40px] mt-3 rounded  "
              type="password"
              placeholder="Password"
            />
          </form>
          <p className="mt-3">
            I agree to the{" "}
            <a className=" text-xs text-orange-500 hover:underline " href="">
              privacy policy{" "}
            </a>
            and{" "}
            <a className=" text-xs text-orange-500 hover:underline  " href="">
              terms of service
            </a>
          </p>
          <button className="bg-blue-600 w-[350px] h-[40px] text-center rounded mt-3 text-white hover:bg-orange-500  ">
            Agree and Join
          </button>
          <Link to='/' ><p className="text-xs text-orange-500 hover:underline mt-3 " ><a href="">Already have an account</a></p></Link>
        </div>
        <div className="w-[450px]  ml-10 mt-24 text-justify text-xs  ">
          <p className="pt-16 text-orange-400 ">About</p>
          <h1 className="text-4xl font-medium text-gray-700 mb-4 ">
            Evangadi Networks
          </h1>
          <p className="pb-20">
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
            <p className="mt-3 ">
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
          </p>
          <button className=" w-[150px] h-[30px] bg-orange-500 text-white rounded ">
            HOW IT WORKS
          </button>
        </div>
      </div>
      <div>
        <p className=" mt-10 text-center text-4xl font-semibold text-gray-700 ">
          Evangadi Academy
        </p>
        <div className=" mt-5 pb-5 flex items-center justify-evenly shadow-xl ">
          <div className=" col-start-1 ">
            <p>Next class will start on Jan27th,2024</p>
            <p>
              Name of the course: Fullstack Web Development (MERN Stack)
              Discussion on the lecture videos: Sat & Sun 10:00am - 12:00pm EST
              (DC Time) Practice hours (Exercises & Checklist): Group 1: Tue &
              Thur 10:00am - 12:00pm EST Group 2: Tue & Thur 1:00pm - 3:00pm EST
              Group 3: Tue & Thur 7:00pm - 9:00pm EST Group 4: Tue & Thur 9:00pm
              - 11:00pm EST Price per phase $600 $800 Total price $1,800 $2,400
            </p>
            <button>Request to join class</button>
          </div>
          <div className="col-start-1 ">
            <h2>Before you join this course</h2>
            <p>
              Step 1: Clearly understand WHY you have to learn a technology
              field
            </p>
            <p>
              If you are reading this, we understand you are already interested
              to learn a technology field. But, we have repeatedly noticed that
              this decision is made based on wrong assumptions. For example,
              some people assume it is an easy shortcut to get a well paying job
              with in 3 months. IT IS NOT!! Please start by watching this video
              to clearly understand WHY you have to learn a technology field.
            </p>
            <video src=""></video>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
