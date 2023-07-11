"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, verifyingOtp, reset } from "../redux/features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./../redux/hooks";
import "./Styles/Style.scss";
import Loading from "./Components/Loading";
import "./Styles/Formstyle.scss";

const Login = () => {
  const [loginData, setloginData] = useState({
    mobileNumber: "",
    password: "",
  });

  const [otp, setotp] = useState({
    getOtp: "",
  });

  const { mobileNumber, password } = loginData;
  const { getOtp } = otp;

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user,isLoading, isError, isSuccess, message, joinedUsers, signupmessage } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    if (isError) toast.error(message);
    if (user?.data) router.push("/dashboard");
    if(!user?.data) router.push("/")
    if (isSuccess) toast.success(user?.message);
    if (isLoading) <Loading/>;
    dispatch(reset());
  }, [user,isError, isLoading, isSuccess, dispatch, router, message, joinedUsers]);

  useEffect(() => {
    if (signupmessage?.message) toast.success(signupmessage?.message);
  }, [signupmessage?.message]);

  

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const Otpchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setotp((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };

  const Onsubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const loginData = {
      mobileNumber,
      password,
    };

    dispatch(login(loginData));
  };

  const verifyOtp = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const otps = { getOtp };
    dispatch(verifyingOtp(otps));
  };

  return (
    <div className="bodycontainer">
      <ToastContainer />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={Onsubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              placeholder="MobileNumber"
              required
              minLength={10}
              maxLength={10}
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={Onchange}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={10}
              id="password"
              name="password"
              value={password}
              onChange={Onchange}
              autoComplete="off"
            />

            <button type="submit" className="btn--green">
              Login
            </button>
            <div className="forgotandsignup">
              <Link href={"/forgotpassword"}>Forgot Password ?</Link>
              <Link href={"/signup"}>Sign Up</Link>
            </div>
          </form>
        </div>
        <div className="login">
          <form onSubmit={verifyOtp}>
            <label htmlFor="chk" aria-hidden="true">
              verify Otp
            </label>
            <input
              type="text"
              placeholder="Enter Otp"
              required
              name="getOtp"
              onChange={Otpchange}
              value={getOtp}
              maxLength={7}
            />
            <button className="btn--green" type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
