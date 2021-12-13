import { Link } from "react-router-dom";
const SignInPage = () => {
  return (
    <div>
      <body>
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:flex w-1/2 hidden bg-gray-100 bg-no-repeat bg-cover relative items-center"
            style={{
              backgroundImage: `url(https://media.istockphoto.com/photos/making-paper-blueprints-a-thing-of-the-past-picture-id1297780275?b=1&k=20&m=1297780275&s=170667a&w=0&h=tMhMWqPqWRJzj8AtIN3uag7FWoo6gyOqCuv5KagPmKI=)`,
            }}
          >
            <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide">
                buy anything and sell anything
              </h1>
              <p className="text-xl my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
            style={{ backgroundColor: "#fff" }}
          >
            {/* <div
              className="absolute lg:hidden z-10 inset-0 bg-white bg-no-repeat bg-cover items-center text-black"
            //   style={{
            //     backgroundImage: `url(https://media.istockphoto.com/photos/making-paper-blueprints-a-thing-of-the-past-picture-id1297780275?b=1&k=20&m=1297780275&s=170667a&w=0&h=tMhMWqPqWRJzj8AtIN3uag7FWoo6gyOqCuv5KagPmKI=)`,
            //   }}
            >
              <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div> */}
            <div className="w-full py-6 z-20">
              <h1 className="my-6 inline-flex justify-center">
                <img
                  src="https://izitini-spaces.fra1.digitaloceanspaces.com/syastem-images/Logo1.png"
                  className="text-center"
                  width="100px"
                  height="100px"
                  alt="logo"
                />
              </h1>
              <div className="py-6 space-x-3">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-middle-blue text-middle-blue">
                  f
                </span>
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-middle-blue text-middle-blue">
                  G+
                </span>
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-middle-blue text-middle-blue">
                  in
                </span>
              </div>
              <p className="text-gray-900 mb-2">or use email your account</p>
              <form
                action=""
                className="sm:w-2/3 w-full px-4 space-y-3 lg:px-0 mx-auto text-gray-900 "
              >
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="block w-full p-4 text-lg rounded-sm bg-gray-100"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-gray-100"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-right text-light-blue hover:underline hover:text-middle-blue">
                  <a href="#">Forgot your password?</a>
                </div>

                <div className="px-4 pb-2 pt-4">
                  <button className="uppercase block w-full p-4 text-lg rounded-full bg-light-blue hover:bg-middle-blue focus:outline-none">
                    sign in
                  </button>
                </div>
                <div>
                  By continuing, you agree to Izitini's Terms and Conditions of
                  Use and Privacy Notice. New{" "}
                  <Link to="/signup">
                    <a className="text-right text-light-blue hover:underline hover:text-middle-blue">
                      Sign Up
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default SignInPage;
