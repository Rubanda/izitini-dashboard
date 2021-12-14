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
            className="lg:w-1/2 w-full flex items-center justify-center text-center bg-gray-100 md:px-16 px-4 z-0"
          >
            <div className="py-6 px-1 z-20 mx-auto">
              <h1 className="my-6 inline-flex justify-center">
                <img
                  src="https://izitini-spaces.fra1.digitaloceanspaces.com/syastem-images/Logo1.png"
                  className="text-center"
                  width="100px"
                  height="100px"
                  alt="logo"
                />
              </h1>
              <div className="">
              <div className="flex flex-col p-5 gap-3">
                <button
                  className="bg-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center justify-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="https://givefast.link/wp-content/themes/aiodl-default/assets/sources/facebook.svg"
                  />
                  facebook
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center justify-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                  />
                  Google
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center justify-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                  />
                  LinkedIn
                </button>
              </div>
              <div className='flex justify-center'><hr/><p className="text-gray-900 mb-2">or use email your account</p><hr  /></div>
              <form
                action=""
                className=" w-full px-4 space-y-3 mx-auto text-gray-900 "
              >
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="border border-gray-700 px-3 py-3 placeholder-gray-500 text-gray-600 bg-gray-100 rounded text-sm  focus:outline-none w-full ease-linear transition-all duration-150"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="border border-gray-700 px-3 py-3 placeholder-gray-500 text-gray-600 bg-gray-100 rounded text-sm  focus:outline-none  w-full ease-linear transition-all duration-150"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-right text-light-blue hover:underline hover:text-middle-blue">
                  <a href="#">Forgot your password?</a>
                </div>

                <div className="">
                  <button className="uppercase  w-full p-2 text-white  text-lg rounded-lg bg-light-blue hover:bg-middle-blue focus:outline-none">
                    sign in
                  </button>
                </div>
                <div>
                  By continuing, you agree to Izitini's Terms and Conditions of
                  Use and Privacy Notice. New 
                  <Link to="/signup">
                    <a className="text-right text-light-blue hover:underline hover:text-middle-blue">
                      Sign Up
                    </a>
                  </Link>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default SignInPage;
