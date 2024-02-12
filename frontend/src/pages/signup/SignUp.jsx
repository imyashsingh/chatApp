const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full bg-blue-300 rounded-md p-4  ">
                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className=" text-violet-900 mt-4 text-center text-3xl font-extrabold leading-9 tracking-tight">
                            Chat App
                        </h2>
                        <h2 className=" mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign Up
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    FullName
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        autoComplete="fullName"
                                        required
                                        placeholder="fullName"
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        placeholder="Username"
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="password"
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="confirm-password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        autoComplete="confirm-password"
                                        placeholder="Confirm Password"
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="male"
                                    className="me-4 text-gray-900"
                                >
                                    Male{" "}
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        required
                                        className="align-middle scale-125 cursor-pointer"
                                    />
                                </label>

                                <label
                                    htmlFor="female"
                                    className="me-4 text-gray-900"
                                >
                                    Female{" "}
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        className="align-middle scale-125 cursor-pointer rounded-sm"
                                    />
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="mt-8 text-center">
                            <a
                                href="#"
                                className="font-semibold text-sm leading-6 text-gray-900 hover:text-gray-700"
                            >
                                I already have a account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
