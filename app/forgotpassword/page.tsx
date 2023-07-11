'use client'
import React, { useState, useEffect } from "react";
import { resetpassword,forgotpassword,reset } from "@/redux/features/userSlice";
import{useAppDispatch,useAppSelector} from "@/redux/hooks";
import { ToastContainer,toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "./../Styles/Style.scss"
import "./../Styles/Formstyle.scss"
import "./../Styles/Card.scss"
const FgtPwd = () => {
  const [pwddata, setpwddata] = useState({ number: "" });
  const [confirmotp, setotp] = useState({
    otp: "",
    changePassword: "",
  });

  const dispatch = useAppDispatch();
  const router =useRouter();
  const { otp, changePassword } = confirmotp;
  const { number } = pwddata;

  const { user, isError, isSuccess, isLoading } = useAppSelector(
    (state) => state.user
  );
  const Onchange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setpwddata((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess) router.push("/");
    if (isError) toast.error("something went wrong");
    dispatch(reset());
  }, [isSuccess, isError, isLoading, router, dispatch]);

  const Onsubmit = (e:React.ChangeEvent<any>) => {
    dispatch(forgotpassword({ number }));
  };

  const Otpchange = (e:React.ChangeEvent<any>) => {
    setotp((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };
  const verifyOtp = async (e:React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(resetpassword({ otp, changePassword }));
  };


  return (
    <div className="bodycontainer">
        <ToastContainer/>
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

export default FgtPwd;
