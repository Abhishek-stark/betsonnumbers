"use client";
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  resetpassword,
  forgotpassword,
  reset,
} from "../../redux/features/userSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks";
import "./../Styles/Style.scss";
// import Loading from "./Loading";

import "./../Styles/Formstyle.scss";

const Page = () => {
  const [pwddata, setpwddata] = useState({ number: "" });
  const [confirmotp, setotp] = useState({
    otp: "",
    changePassword: "",
  });

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { otp, changePassword } = confirmotp;
  const { number } = pwddata;

  const { user, isError, isSuccess, isLoading } = useAppSelector(
    (state) => state.user
  );
  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwddata((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess) router.push("/");
    if (isError) router.push("/");
    dispatch(reset());
  }, [isSuccess, isError, isLoading, router, dispatch]);

  const Onsubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    dispatch(forgotpassword({ number }));
  };

  const Otpchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setotp((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };
  const verifyOtp = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetpassword({ otp, changePassword }));
  };
  return (
    <div className="bodycontainer">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={Onsubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Enter Number
            </label>
            <input
              type="text"
              placeholder="Enter your register number to send  OTP"
              required
              minLength={10}
              maxLength={10}
              id="mobileNumber"
              name="number"
              value={number}
              onChange={Onchange}
              autoComplete="off"
            />

            <button type="submit" className="btn--green">
              Send Otp
            </button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={verifyOtp}>
            <label htmlFor="chk" aria-hidden="true">
              Reset Pasword
            </label>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              name="otp"
              onChange={Otpchange}
              value={otp}
              maxLength={7}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Enter New Password"
              required
              name="changePassword"
              value={changePassword}
              minLength={10}
              onChange={Otpchange}
              autoComplete="off"
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

export default Page;
