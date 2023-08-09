"use client";
import React, { useEffect, memo, useState, useRef } from "react";
import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";

import "./../Styles/Style.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { reset, checkColors, resetColor } from "../../redux/features/userSlice";

import { CurrencyRupee } from "@mui/icons-material";

const TimePage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [timers, settimer] = useState(120);

  const timer = useRef(0);
  const minutetime = new Date();
  const getseconds = minutetime.getSeconds();
  const minutes = minutetime.getMinutes();

  let minute = 3 - (minutes % 3);
  // let minute = minutes % 3;
  let second = 60 - getseconds;
  const [gtuser, setuser] = useState<any>();
  useEffect(() => {
    setuser(user);
    timer.current = window.setInterval(() => {
      if (timers > 0) {
        settimer((prev) => prev - 1);
      }

      if (timers <= 0) {
        settimer(120);
      }
    }, 1000);

    if (
      minute === 3 &&
      second === 7 &&
      user &&
      (gtuser?.data?.tenthjoin !== "No" ||
        gtuser?.data?.tweentyjoin !== "No" ||
        gtuser?.data?.fourtyjoin !== "No" ||
        gtuser?.data?.sixtyjoin !== "No" ||
        gtuser?.data?.seventyjoin !== "No" ||
        gtuser?.data?.hundredjoin !== "No" ||
        gtuser?.data?.oneFiftyjoin !== "No")
    ) {
      dispatch(checkColors());
      console.log("ColorCheck");
    }

    if (
      minute === 3 &&
      second === 1 &&
      gtuser &&
      (gtuser?.data?.tenthjoin !== "No" ||
        gtuser?.data?.tweentyjoin !== "No" ||
        gtuser?.data?.fourtyjoin !== "No" ||
        gtuser?.data?.sixtyjoin !== "No" ||
        gtuser?.data?.seventyjoin !== "No" ||
        gtuser?.data?.hundredjoin !== "No" ||
        gtuser?.data?.oneFiftyjoin !== "No")
    ) {
      dispatch(resetColor());

      console.log("resetting..");
    }

    return () => clearInterval(timer.current);
  }, [timers]);

  const [sminute, setminute] = useState(0);
  const [ssecond, setseconds] = useState(0);

  // if upper two state sminute and ssecond remoe than do minute and second in below only

  useEffect(() => {
    setminute(minute);
    setseconds(second);
  }, [minute, second]);

  return (
    <div className="timebtn">
      <button className="timebtn--1">
        Remaining :
        <span className="timer">
          {sminute === 3 ? 0 : minute}:{ssecond}
        </span>
      </button>
    </div>
  );
};
const Navbar = memo(() => {
  const router = useRouter();
  const [getuser, setuser] = useState<any>();
  const dispatch = useAppDispatch();
  const { user, isLoading, isError, message } = useAppSelector(
    (state) => state.user
  );

  const navigation = () => {
    router.push("/setting");
  };

  useEffect(() => {
    setuser(user);
    if (isError) console.log(message);
    dispatch(reset());
  }, [isError, router, message, dispatch, user]);

  const registerhandler = () => {
    router.push("/signup");
  };
  return (
    <>
      {user && getuser ? (
        <div className="navdiv">
          {user?.data ? (
            <button className="navdiv__btn navdiv__btn--2" onClick={navigation}>
              <AccountCircleIcon />
            </button>
          ) : null}

          <div className="  navdiv__btn--3">
            {user?.data?.balance ? (
              <span className="navdiv__btn--span">
                <CurrencyRupee />
                {user?.data?.balance}
              </span>
            ) : null}
          </div>
          <TimePage />
        </div>
      ) : null}
    </>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
