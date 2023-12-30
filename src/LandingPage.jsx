import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const LandingPage = () => {
  return (
    <div className="max-w-auto">
      <div className="pt-20 h-[700px] flex shadow-sm ">
        <div className="   w-[450px] h-[400px] ml-48 mt-24 shadow-2xl rounded-md text-center text-xs ">
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
              className=" border border-slate-300  w-[350px] h-[42px] mt-12 rounded "
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
      <p className=" mt-10 mb-10 text-center text-4xl font-semibold text-gray-700 ">
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
            <p className="text-black text-sm font-semibold  ">
              Price per phase
            </p>
            <p className="text-black text-xs font-semibold  ">$600 | $800</p>
            <p className="text-black text-xs font-semibold  ">Total price</p>
            <p className="text-black text-xs font-semibold  ">
              $1,800 | $2,400
            </p>
          </div>
          <div className=" pb-5 pt-20 flex justify-center  ">
            <div className=" w-[150px] h-10 text-center bg-blue-600 pt-3 rounded ">
              Request to join class
            </div>
          </div>
          <div className=" text-gray-600 ">
            <p className=" text-base font-bold mt-8 ">
              Phase 1: Building static websites using HTML, CSS&Bootstrap
            </p>
            <p>
              In this phase, you'll learn about the underlying structure of the
              web - HTML. You'll also learn how to apply styling to a website
              through CSS. To help you build websites faster and easier, you
              will learn the Bootstrap framework. Along the way, you'll also
              learn about Sublime text editor and a browsers' Developer Tools.
            </p>
            <p className=" text-base font-bold mt-8  ">Discounted price</p>
            <p>... the same discount is applied for this batch too.</p>
            <p className=" text-sm  font-bold ">$600 | 800</p>
            <p className=" text-sm  font-bold "> Class Dates </p>
            <p>Starts on Jan 27th</p>
            <p> Sat & Sun (10:00am - 12:00pm EST - lecture sessions)</p>
            <p className=" text-base font-bold mt-8   ">
              Registration going on now
            </p>
            <div className=" pb-5 pt-10 flex justify-center  ">
              <div className=" w-[150px] h-10 text-center bg-blue-600 pt-3 text-white rounded   ">
                Request to join class
              </div>
            </div>
          </div>

          <div className=" text-gray-600 ">
            <p className=" text-base font-bold mt-8 ">
              Phase 2: Learn coding with JavaScript
            </p>
            <p>
              JavaScript is among the most powerful and flexible programming
              languages of the web. It powers the dynamic behavior on most
              websites. In this phase, you will learn programming fundamentals
              using the latest JavaScript syntax. The concepts covered in these
              lesson lay the foundation for using JavaScript both for front end
              and back end development.
            </p>
            <p className=" text-base font-bold mt-8  ">Discounted price</p>
            <p>... the same discount is applied for this batch too.</p>
            <p className=" text-sm  font-bold ">$600 | 800</p>
            <p className=" text-sm  font-bold "> Class Dates </p>
            <p> Sat & Sun (10:00am - 12:00pm EST - lecture sessions)</p>
            <p className=" text-base font-bold mt-8   ">
              Registration going on now
            </p>
            <div className=" pb-5 pt-10 flex justify-center  ">
              <div className=" w-[150px] h-10 text-center bg-blue-600 pt-3 text-white rounded   ">
                Request to join class
              </div>
            </div>
          </div>

          <div className=" text-gray-600 ">
            <p className=" text-base font-bold mt-8 ">
              Phase 3: React.js, Node.js, MySql & Express.js
            </p>
            <p>
              React is a JavaScript library, developed in 2013 by Facebook. It
              is very popular and used on major sites including Facebook,
              Netflix, Khan Academy and many others. In this phase, we will
              start from the fundamentals and go all the way up to building full
              applications with custom styling. Along the way, you'll also learn
              about npm, Git, ES6, JSX and more ...
            </p>
            <p className=" text-base font-bold mt-8  ">Discounted price</p>
            <p>... the same discount is applied for this batch too.</p>
            <p className=" text-sm  font-bold ">$600 | 800</p>
            <p className=" text-sm  font-bold "> Class Dates </p>
            <p> Sat & Sun (10:00am - 12:00pm EST - lecture sessions)</p>
            <p className=" text-base font-bold mt-8   ">
              Registration going on now
            </p>
            <div className=" pb-5 pt-10 flex justify-center  ">
              <div className=" w-[150px] h-10 text-center bg-blue-600 pt-3 text-white rounded   ">
                Request to join class
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[400px] text-left ml-12 shadow-sm  ">
          <h2 className=" font-semibold text-xl text-center  ">
            Before you join this course
          </h2>
          <p className=" font-semibold ">
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
            <iframe
              width="400px"
              height="240px"
              src="https://www.youtube.com/embed/Hx1i_GBiXNA?si=K-NfDppI2Sr4TOan"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className=" font-semibold mt-8 ">
            Step 2: Carefully choose the right field to learn{" "}
          </p>
          <p className="  text-xs ">
            Once you clearly understand WHY you have to learn a tech field, you
            have to carefully choose a field to study first. As an outsider
            trying to get into the tech world, you probably have heard multiple
            suggestions such as SQL, AWS, Web Development, MuleSoft, SharePoint,
            QA or many other fields. Please watch this video to understand which
            one is right for you.
          </p>
          <br />
          <div>
            <iframe
              width="400px"
              height="240px"
              src="https://www.youtube.com/embed/kpfzbZkeJc0?si=3eWQx76oMURKbjZB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className=" font-semibold mt-8 ">
            Step 3: Understand the course we teach
          </p>
          <p className=" text-xs  ">
            If learning Fullstack Web Development is the right fit for you, that
            is the course we teach. Please watch this video to understand our
            curriculum, class hours and course structure.
          </p>
          <div>
            <iframe
              width="400px"
              height="240px"
              src="https://www.youtube.com/embed/hYWbmKQF-dI?si=f7Kqb71eKdT0ViBJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className=" font-semibold mt-8 ">
            Step 4: Understand what it takes to successfully transition and
            become a tech professional
          </p>
          <p className="  text-xs   ">
            period of the course. Needless to say, it requires a lot of focus
            and dedication to successfully complete the course. If we try to put
            it in terms of hours, it requires you to spend 3 - 4 hours a day
            continuously throughout the course. Other than that, it doesn't
            require you to have a tech background as we prepared the course for
            absolute beginners.
          </p>
          <div>
            <iframe
              width="400px"
              height="240px"
              src="https://www.youtube.com/embed/wqxqCMWk18U?si=E_PhK7WNAjgEzByj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className=" font-semibold mt-8 ">Step 5: Contact us to register</p>
          <p className="  text-xs   ">
            If you understand what we are trying to teach and you decide to take
            the course, you can contact us at 202-386-2702 for further
            questions. We will also finalize the registration once we address
            all of your questions. You can also request to join the class below.
            We will contact you to finalize the registration.
          </p>
          <div className=" pb-5 pt-10 flex justify-center  ">
            <div className=" w-[150px] h-10 text-center bg-blue-600 pt-3 text-white text-xs rounded   ">
              Request to join class
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
