"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks";
import { useRouter } from "next/navigation";
import { logout, updatePassword, reset } from "../../redux/features/userSlice";
import Button from "@mui/material/Button";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import "./../Styles/Style.scss";
import Loading from "../Components/Loading";
const Password = () => {
  const dispatch = useAppDispatch();
  const [passwordData, setpasswordData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const { currentPassword, password, confirmPassword } = passwordData;
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) console.log(message);
  
    if (isSuccess) console.log("success", message);
    dispatch(reset());
  }, [isError, message, isLoading, isSuccess, dispatch]);

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpasswordData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const Onsubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const passwordData = {
      currentPassword,
      password,
      confirmPassword,
    };

    dispatch(updatePassword(passwordData));
  };

  if (isLoading) <Loading/>;
  return (
    <div className="userDetail__right--password">
      <form onSubmit={Onsubmit}>
        <input
          type="password"
          className="cupassword"
          placeholder="Enter Current Pasword"
          required
          minLength={10}
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={Onchange}
          autoComplete="off"
        />

        <input
          type="password"
          className="npassword"
          placeholder="Enter New Pasword"
          required
          minLength={10}
          id="password"
          name="password"
          value={password}
          onChange={Onchange}
          autoComplete="off"
        />

        <input
          type="password"
          className="cpassword"
          placeholder="Confirm password"
          required
          minLength={10}
          id="confrimPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={Onchange}
          autoComplete="off"
        />
        <Button variant="contained" type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

const PhoneNumber = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="userDetail__right--mobileNumber">
      Current Number : <span>{user?.data?.mobileNumber}</span>
      <hr />
      <p>Change Mobile Number</p>
      <form className="numberform">
        <input
          type="text"
          placeholder="Enter New Number"
          required
          minLength={10}
        />
        <input type="text" placeholder="Enter OTP" />
        <Button variant="contained">send OTP</Button>
        <Button variant="contained" color="error">
          Update
        </Button>
      </form>
    </div>
  );
};

const Balance = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div>
      <p>
        <CurrencyRupee />
        {user?.data?.balance}
      </p>
      <Button variant="contained" color="error">
        Widdraw
      </Button>
    </div>
  );
};

const Dashboard = () => {
  const { user, isError, message } = useAppSelector((state) => state.user);
  const [changes, setchanges] = useState("balance");
  const [classchange, setclasschange] = useState("balanceClass");
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!user) router.push("/");
    if (message) console.log(message);
    if (isError) console.log("This is error from Dashboard page");
  }, [user, isError, message, router]);

  const showBalance = () => {
    setchanges("balance");
    setclasschange("balanceClass");
  };

  const showPassword = () => {
    setchanges("passwords");
    setclasschange("passwordClass");
  };

  const showNumber = () => {
    setchanges("number");
    setclasschange("numberClass");
  };

  const logoutbtn = () => {
    dispatch(logout());
  };

  return (
    <div className="userDetail">
      <div className="userDetail__left">
        <div className="leftdash" onClick={showBalance}>
          Balance
        </div>
        <div className="leftdash" onClick={showNumber}>
          Mobile Number
        </div>
        <div onClick={showPassword}>Password</div>
        <button className="logoutbtn" onClick={logoutbtn}>
          Logout
        </button>
      </div>

      <div className="userDetail__right">
        {changes === "passwords" ? (
          <Password />
        ) : changes === "number" ? (
          <PhoneNumber />
        ) : (
          <Balance />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
