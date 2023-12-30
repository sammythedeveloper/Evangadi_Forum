import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const SignupPage = () => {
  return (
    <div>
      <div className=" pt-20 h-[700px] flex shadow-sm ">
        <div className="  w-[400px] h-[400px] ml-64 mt-24 shadow-2xl rounded-md text-center text-xs  ">
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
          <Link to="/">
            <p className="text-xs text-orange-500 hover:underline mt-3 ">
              <a href="">Already have an account</a>
            </p>
          </Link>
        </div>
        <div className="w-[450px]  ml-10 mt-24 text-justify text-xs text-gray-500 ">
          <p className="pt-16 text-orange-400 ">About</p>
          <h className=" text-4xl font-medium text-gray-700  ">
            Evangadi Networks
          </h>
          <p className="pb-10 pt-5">
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
            <p className="mt-5 ">
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
      <p className=" mt-10 mb-10 text-center text-4xl font-semibold text-gray-700 ">
        Evangadi Academy
      </p>
      <div className=" mt-5 pb-5 flex justify-center  ">
        <div className=" h-[500px] w-[400px] text-left hover:bg-orange-400  hover:text-white    text-gray-400 text-xs rounded shadow-md ">
          <p className="text-white text-lg font-bold text-center pt-5">
            Next class will start on Jan27th,2024
          </p>
          <div className=" ml-8 mt-10  ">
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
            <p className="text-black text-sm font-semibold  ">
              Price per phase
            </p>
            <p className="text-black text-sm font-semibold  ">$600 | $800</p>
            <p className="text-black text-sm font-semibold  ">Total price</p>
            <p className="text-black text-sm font-semibold  ">
              $1,800 | $2,400
            </p>
            <div className="pt-16 ml-16 ">
              <button className=" w-[150px] h-[30px] bg-blue-600 text-blue-50  text-xs font-medium hover:bg-orange-500 rounded-lg ">
                Request to join class
              </button>
            </div>
            <br />
            <div className="  text-gray-700 shadow-md w-[400px] text-left " >
            <p className=" " >Phase 1: Building static websites using HTML, CSS & Bootstrap</p>
            <p>
              In this phase, you'll learn about the underlying structure of the
              web - HTML. You'll also learn how to apply styling to a website
              through CSS. To help you build websites faster and easier, you
              will learn the Bootstrap framework. Along the way, you'll also
              learn about Sublime text editor and a browsers' Developer Tools.
            </p>
            <p>
              Discounted price ... the same discount is applied for this batch
              too.
            </p>
            <p>$600 | $800</p>
            <br />
            <p>Class dates:</p>
            <br />
            <p>Starts on Jan 27th</p>
            <p>Sat & Sun (10:00am - 12:00pm EST - lecture sessions) </p>
              <p>Registration going on now</p>
              </div>
          </div>
        </div>
        <div className=" w-[400px] text-left ml-12 text-gray-700 ">
          <h2 className=" font-semibold text-xl text-center pb-10 ">
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
          <div>
            <ReactPlayer
              width={"400px"}
              height={"240px"}
              url="https://www.youtube.com/watch?v=Hx1i_GBiXNA"
            />
          </div>
          <div>
            <p className=" font-semibold pb-3">
              Step 2: Carefully choose the right field to learn
            </p>
            <p className=" text-xs ">
              Once you clearly understand WHY you have to learn a tech field,
              you have to carefully choose a field to study first. As an
              outsider trying to get into the tech world, you probably have
              heard multiple suggestions such as SQL, AWS, Web Development,
              MuleSoft, SharePoint, QA or many other fields. Please watch this
              video to understand which one is right for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
