"use client";
import React, { useState, useEffect } from "react";

import "./../Styles/Formstyle.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector, useDispatch } from "react-redux";
import { reset, signup } from "../../redux/features/userSlice";
// import Loading from "./Loading";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks";

import "./../Styles/Formstyle.scss";
const Registerpage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // const verifymessage = JSON.parse(localStorage.getItem("signupmessage"));
  const [data, setdata] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",

    confirmPassword: "",
  });
  const {
    name,
    email,
    mobileNumber,
    password,
    confirmPassword,
    // signupmessage,
  } = data;

  const { isError, isSuccess, isLoading, message, signupmessage } =
    useAppSelector((state) => state.user);

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdata((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (isError) toast.error(signupmessage?.message || message);

    if (isSuccess) router.push("/");

    dispatch(reset());
  }, [isSuccess, isError, isLoading, router, signupmessage, dispatch]);

  useEffect(() => {
    if (signupmessage?.message) toast.success("Signup Successfully ");
  }, [signupmessage?.message]);

  const Submithandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = { name, email, mobileNumber, password, confirmPassword };

    dispatch(signup(formdata));
  };

  if (isLoading) console.log("Loading ...");
  return (
    <div className="divformContainer">
      <ToastContainer />
      <form className="divformContainer__form" onSubmit={Submithandler}>
        <input
          type="text"
          className="divformContainer__form--input"
          id="name"
          name="name"
          value={name}
          required
          placeholder="Enter name no special character"
          maxLength={20}
          minLength={4}
          autoComplete="off"
          onChange={Onchange}
        />
        <input
          type="email"
          className="divformContainer__form--input"
          required
          placeholder="Enter your email"
          autoComplete="off"
          id="email"
          name="email"
          value={email}
          onChange={Onchange}
        />
        <input
          type="text"
          className="divformContainer__form--input"
          required
          placeholder="Provide your mobile number"
          minLength={10}
          maxLength={10}
          autoComplete="off"
          name="mobileNumber"
          id="mobileNumber"
          value={mobileNumber}
          onChange={Onchange}
        />
        <input
          type="password"
          className="divformContainer__form--input"
          required
          placeholder="Enter your password"
          minLength={10}
          autoComplete="off"
          id="password"
          name="password"
          value={password}
          onChange={Onchange}
        />
        <input
          type="password"
          className="divformContainer__form--input"
          required
          placeholder="Confirm Password"
          minLength={10}
          autoComplete="off"
          name="confirmPassword"
          id="confirmPasword"
          value={confirmPassword}
          onChange={Onchange}
        />
        <button className="divformContainer__form--button" type="submit">
          Register
        </button>
      </form>{" "}
    </div>
  );
};

export default Registerpage;
