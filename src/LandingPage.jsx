import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="">
      <div className=" mt-5 pb-5 flex items-center justify-evenly shadow-xl">
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
        <Link to="/">
          <button className=" w-[150px] h-[30px] bg-blue-600 text-blue-50  text-xs font-medium hover:bg-orange-500 rounded-lg ">
            SIGN IN
          </button>
        </Link>
      </div>
      <div className=" h-[600px] flex shadow-sm ">
        <div className="  w-[450px] h-[400px] ml-48 mt-24 shadow-2xl rounded-md text-center text-xs ">
          <p className=" text-center text-lg  font-semibold mt-8 ">
            Login to your account
          </p>
          <p className="text-center text-xs  ">
            Don't have an account?{" "}
            <Link to="/SignUpPage">
              <a className=" text-orange-500  hover:underline" href="">
                Create a new account
              </a>
            </Link>
          </p>
          <form className="  " action="">
            <input
              className=" border border-slate-300 w-[350px] h-[42px] mt-12 rounded "
              type="email"
              placeholder="Email address "
            />
            <br />
            <input
              className=" border border-slate-300 w-[350px] h-[42px] mt-5 rounded  "
              type="password"
              placeholder="Password"
            />
          </form>
          <button className="bg-blue-600 w-[350px] h-[40px] text-center rounded mt-12 text-white hover:bg-orange-500  ">
            Login
          </button>
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
      <p className=" mt-10 text-center text-4xl font-semibold text-gray-700 ">
        Evangadi Academy
      </p>
      <div className=" mt-5 pb-5 flex justify-center  ">
        <div className=" h-[500px] w-[400px] text-left bg-orange-400 text-white text-xs rounded ">
          <p className="text-white text-lg font-bold text-center pt-5">
            Next class will start on Jan27th,2024
          </p>
          <div className=" ml-8 mt-10">
            <p className="text-black text-base font-semibold   ">
              Name of the course:
            </p>
            <p>Fullstack Web Development (MERN Stack)</p>
            <p className="text-black text-base font-semibold  ">
              Discussion on the lecture videos:
            </p>
            <p className=" ">Sat & Sun 10:00am - 12:00pm EST(DC Time) </p>
            <p className="text-black text-base font-semibold te ">
              Practice hours (Exercises & Checklist):
            </p>
            Group 1: Tue & Thur <br />
            10:00am - 12:00pm EST <br />
            <br />
            Group 2: Tue & Thur <br />
            1:00pm - 3:00pm EST <br />
            <br />
            Group 3: Tue & Thur <br />
            7:00pm - 9:00pm EST <br />
            <br />
            Group 4: Tue & Thur <br />
            9:00pm- 11:00pm EST <br />
            <br />
            <p className="text-black text-base font-semibold  ">
              Price per phase
            </p>
            <p className="text-black text-base font-semibold  ">$600 | $800</p>
            <p className="text-black text-base font-semibold  ">Total price</p>
            <p className="text-black text-base font-semibold  ">
              $1,800 | $2,400
            </p>
          </div>
        </div>
        <div className=" w-[400px] text-left ml-12  ">
          <h2 className=" font-semibold text-xl text-center  ">
            Before you join this course
          </h2>
          <p className=" font-semibold  ">
            Step 1: Clearly understand WHY you have to learn a technology field
          </p>
          <p className=" text-xs ">
            If you are reading this, we understand you are already interested to
            learn a technology field. But, we have repeatedly noticed that this
            decision is made based on wrong assumptions. For example, some
            people assume it is an easy shortcut to get a well paying job with
            in 3 months. IT IS NOT!! Please start by watching this video to
            clearly understand WHY you have to learn a technology field.
          </p>
          <br />
          <video
            className="w-[500px] h-[230px] "
            src="https://www.youtube.com/watch?v=Hx1i_GBiXNA"
            controls
          ></video>
        </div>
      </div>
      <div className=" pb-5 flex justify-center  ">
        <div className="">Request to join class</div>
        <div className="  w-[450px] text-left ml-12 text-xs ">
          Step 2: Carefully choose the right field to learn Once you clearly
          understand WHY you have to learn a tech field, you have to carefully
          choose a field to study first. As an outsider trying to get into the
          tech world, you probably have heard multiple suggestions such as SQL,
          AWS, Web Development, MuleSoft, SharePoint, QA or many other fields.
          Please watch this video to understand which one is right for you.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
