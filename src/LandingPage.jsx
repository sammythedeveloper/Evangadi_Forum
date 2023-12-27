import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="  ">
        <div>Evangadi</div>
        <div>Home</div>
        <div>How it Works</div>
        <div>SIGN IN</div>
      </div>
      <div>
        <div>
          <p>Login to your account</p>
          <p>Don't have an account?Create a new account</p>
          <form action="">
            <input type="email" />
            <input type="password" />
          </form>
          <button>submit</button>
          <p>Create an account</p>
        </div>
        <div>
          <p>About</p>
          <h1>Evangadi Networks Q&A</h1>
          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
            <br />
            Wheather you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
        </div>
        <button>HOW IT WORKS</button>
      </div>
    </div>
  );
};

export default LandingPage;
