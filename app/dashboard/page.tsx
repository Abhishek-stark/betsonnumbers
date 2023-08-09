"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks";
import "./../Styles/Style.scss";

import {
  reset,
  tenjoin,
  hundredjoin,
  tweentyjoin,
  fourtyjoin,
  sixtyjoin,
  seventyjoin,
  onefiftyjoin,
  selecttenthColor,
  selectoneFiftyColor,
  selectfourtyColor,
  selecthundredColor,
  selecttweentyColor,
  selectseventyColor,
  selectsixtyColor,
} from "./../../redux/features/userSlice";

import FrontandBack from "./../Components/FrontandBack";

const RotatingCard = () => {
  const [show, notshow] = useState(false);
  const [flipbtnten, setflipbtnten] = useState(false);
  const [flipbtntweenty, setflipbtntweenty] = useState(false);
  const [flipbtnfourty, setflipbtnfourty] = useState(false);
  const [flipbtnsixty, setflipbtnsixty] = useState(false);
  const [flipbtnseventy, setflipbtnseventy] = useState(false);
  const [flipbtnhundred, setflipbtnhundred] = useState(false);
  const [flipbtnoneFifty, setflipbtnoneFifty] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message, joinedUsers } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    notshow(true);
  });
  useEffect(() => {
    if (isError) toast.error(user?.message);
    if (isSuccess) toast.success(user?.message);
    if (!user?.data) router.push("/");
    if (isLoading) console.log("loading from dashboard");
    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, router, message, dispatch]);

  const redtenth = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttenthColor({ tenthColor: 1 }));
  };
  const greententh = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttenthColor({ tenthColor: "2" }));
  };
  const yellowtenth = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttenthColor({ tenthColor: "3" }));
  };

  const pinktenth = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttenthColor({ tenthColor: "4" }));
  };

  const bluetenth = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttenthColor({ tenthColor: "5" }));
  };

  const redoneFifty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectoneFiftyColor({ oneFiftyColor: 1 }));
  };
  const greenoneFifty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectoneFiftyColor({ oneFiftyColor: "2" }));
  };
  const yellowoneFifty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectoneFiftyColor({ oneFiftyColor: "3" }));
  };

  const pinkoneFifty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectoneFiftyColor({ oneFiftyColor: "4" }));
  };

  const blueoneFifty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectoneFiftyColor({ oneFiftyColor: "5" }));
  };
  const redhundred = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecthundredColor({ hundredColor: 1 }));
  };
  const greenhundred = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecthundredColor({ hundredColor: "2" }));
  };
  const yellowhundred = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecthundredColor({ hundredColor: "3" }));
  };

  const pinkhundred = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecthundredColor({ hundredColor: "4" }));
  };

  const bluehundred = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecthundredColor({ hundredColor: "5" }));
  };

  const redfourty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectfourtyColor({ fourtyColor: 1 }));
  };

  const greenfourty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectfourtyColor({ fourtyColor: "2" }));
  };
  const yellowfourty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectfourtyColor({ fourtyColor: "3" }));
  };

  const pinkfourty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectfourtyColor({ fourtyColor: "4" }));
  };

  const bluefourty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectfourtyColor({ fourtyColor: "5" }));
  };

  const redtweenty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttweentyColor({ tweentyColor: 1 }));
  };

  const greentweenty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttweentyColor({ tweentyColor: "2" }));
  };

  const yellowtweenty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttweentyColor({ tweentyColor: "3" }));
  };

  const pinktweenty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttweentyColor({ tweentyColor: "4" }));
  };

  const bluetweenty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selecttweentyColor({ tweentyColor: "5" }));
  };

  const redseventy = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectseventyColor({ seventyColor: 1 }));
  };
  const greenseventy = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectseventyColor({ seventyColor: "2" }));
  };

  const yellowseventy = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectseventyColor({ seventyColor: "3" }));
  };

  const pinkseventy = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectseventyColor({ seventyColor: "4" }));
  };

  const blueseventy = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectseventyColor({ seventyColor: "5" }));
  };

  const greensixty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectsixtyColor({ sixtyColor: "2" }));
  };
  const yellowsixty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectsixtyColor({ sixtyColor: "3" }));
  };
  const pinksixty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectsixtyColor({ sixtyColor: "4" }));
  };
  const redsixty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectsixtyColor({ sixtyColor: 1 }));
  };

  const bluesixty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(selectsixtyColor({ sixtyColor: "5" }));
  };

  const joinetenth = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtnten(!flipbtnten);
    dispatch(tenjoin());
  };

  const joinetweenty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtntweenty(!flipbtntweenty);
    dispatch(tweentyjoin());
  };

  const joinefourty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtnfourty(!flipbtnfourty);
    dispatch(fourtyjoin());
  };

  const joinesixty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtnsixty(!flipbtnsixty);
    dispatch(sixtyjoin());
  };

  const joineseventy = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtnseventy(!flipbtnseventy);
    dispatch(seventyjoin());
  };

  const joineoneFifty = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtnoneFifty(!flipbtnoneFifty);
    dispatch(onefiftyjoin());
  };

  const joinehundred = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setflipbtnhundred(!flipbtnhundred);
    dispatch(hundredjoin());
  };

  const getjoinedpeoples = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log("No Information");
  };

  const result = () => {
    router.push("/results");
  };

  return (
    <>
      {user && show ? (
        <section className="Cardsboxes">
          <ToastContainer />
          <div className="threecards">
            <FrontandBack
              price={10}
              joined={user?.data?.tenthjoin}
              join={joinetenth}
              btn={user?.data?.tenthjoin === "yes" ? true : false}
              totaljoin={joinedUsers?.tenthJoined}
              seeResults={result}
              classes="tenCard"
              getjoinedpeople={getjoinedpeoples}
              flipbtns={flipbtnten}
              flipnumber={"tenflip"}
              item={user?.data?.tenth === "0" ? "Not Declared" : user?.item}
              choosen={user?.data?.tenth}
              declaration={
                user?.data?.tenth === user?.item
                  ? "Win"
                  : user?.data?.tenth === "0" || user?.item === "Not Declared"
                  ? "Not Declared"
                  : "Loose"
              }
              Colorbtn={user?.data?.tenthjoin === "yes" ? false : true}
              submitfuncR={redtenth}
              submitfuncG={greententh}
              submitfuncY={yellowtenth}
              submitfuncP={pinktenth}
              submitfuncB={bluetenth}
              appearence={
                user?.data?.tenthjoin === "yes" || user?.data?.tenth !== "0"
                  ? true
                  : false
              }
            />
            <FrontandBack
              price={20}
              joined={user?.data?.tweentyjoin}
              join={joinetweenty}
              btn={user?.data?.tweentyjoin === "yes" ? true : false}
              totaljoin={joinedUsers?.tweentyJoined}
              seeResults={result}
              classes="tweentyCard"
              getjoinedpeople={getjoinedpeoples}
              flipbtns={flipbtntweenty}
              flipnumber={"tweentyflip"}
              item={user?.data?.tweenty === "0" ? "Not Declared" : user?.item}
              declaration={
                user?.data?.tweenty === user?.item
                  ? "Win"
                  : user?.data?.tweenty === "0" || user?.item === "Not Declared"
                  ? "Not Declared"
                  : "Loose"
              }
              Colorbtn={user?.data?.tweentyjoin === "yes" ? false : true}
              choosen={user?.data?.tweenty}
              submitfuncR={redtweenty}
              submitfuncG={greentweenty}
              submitfuncY={yellowtweenty}
              submitfuncP={pinktweenty}
              submitfuncB={bluetweenty}
              appearence={
                user?.data?.tweentyjoin === "yes" || user?.data?.tweenty !== "0"
                  ? true
                  : false
              }
            />
            <FrontandBack
              price={40}
              joined={user?.data?.fourtyjoin}
              join={joinefourty}
              btn={user?.data?.fourtyjoin === "yes" ? true : false}
              totaljoin={joinedUsers?.fourtyJoined}
              seeResults={result}
              classes="fourtyCard"
              getjoinedpeople={getjoinedpeoples}
              flipbtns={flipbtnfourty}
              flipnumber={"fourtyflip"}
              item={user?.data?.fourty === "0" ? "Not Declared" : user?.item}
              choosen={user?.data?.fourty}
              declaration={
                user?.data?.fourty === user?.item
                  ? "Win"
                  : user?.data?.fourty === "0" || user?.item === "Not Declared"
                  ? "Not Declared"
                  : "Loose"
              }
              Colorbtn={user?.data?.fourtyjoin === "yes" ? false : true}
              submitfuncR={redfourty}
              submitfuncG={greenfourty}
              submitfuncY={yellowfourty}
              submitfuncP={pinkfourty}
              submitfuncB={bluefourty}
              appearence={
                user?.data?.fourtyjoin === "yes" || user?.data?.fourty !== "0"
                  ? true
                  : false
              }
            />
            <FrontandBack
              price={60}
              joined={user?.data?.sixtyjoin}
              join={joinesixty}
              btn={user?.data?.sixtyjoin === "yes" ? true : false}
              totaljoin={joinedUsers?.sixtyJoined}
              seeResults={result}
              classes="sixtyCard"
              getjoinedpeople={getjoinedpeoples}
              flipbtns={flipbtnsixty}
              flipnumber={"sixtyflip"}
              item={user?.data?.sixty === "0" ? "Not Declared" : user?.item}
              declaration={
                user?.data?.sixty === user?.item
                  ? "Win"
                  : user?.data?.sixty === "0" || user?.item === "Not Declared"
                  ? "Not Declared"
                  : "Loose"
              }
              Colorbtn={user?.data?.sixtyjoin === "yes" ? false : true}
              choosen={user?.data?.sixty}
              submitfuncR={redsixty}
              submitfuncG={greensixty}
              submitfuncY={yellowsixty}
              submitfuncP={pinksixty}
              submitfuncB={bluesixty}
              appearence={
                user?.data?.sixtyjoin === "yes" || user?.data?.sixty !== "0"
                  ? true
                  : false
              }
            />
            {/* <FrontandBack
          price={70}
          joined={user?.data?.seventyjoin}
          join={joineseventy}
          btn={user?.data?.seventyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.seventyJoined}
          seeResults={result}
          classes="seventyCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnseventy}
          flipnumber={"seventyflip"}
          item={user?.data?.seventy === "0" ? "Not Declared" : user?.item}
          declaration={
            user?.data?.seventy === user?.item
              ? "Win"
              : user?.data?.seventy === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.seventyjoin === "yes" ? false : true}
          choosen={user?.data?.seventy}
          submitfuncR={redseventy}
          submitfuncG={greenseventy}
          submitfuncY={yellowseventy}
          submitfuncP={pinkseventy}
          submitfuncB={blueseventy}
          appearence={
            user?.data?.seventyjoin === "yes" || user?.data?.seventy !== "0"
              ? true
              : false
          }
        /> */}
            <FrontandBack
              price={100}
              joined={user?.data?.hundredjoin}
              join={joinehundred}
              btn={user?.data?.hundredjoin === "yes" ? true : false}
              totaljoin={joinedUsers?.hundredJoined}
              seeResults={result}
              classes="hundredCard"
              getjoinedpeople={getjoinedpeoples}
              flipbtns={flipbtnhundred}
              flipnumber={"hundredflip"}
              item={user?.data?.hundred === "0" ? "Not Declared" : user?.item}
              declaration={
                user?.data?.hundred === user?.item
                  ? "Win"
                  : user?.data?.hundred === "0" || user?.item === "Not Declared"
                  ? "Not Declared"
                  : "Loose"
              }
              Colorbtn={user?.data?.hundredjoin === "yes" ? false : true}
              choosen={user?.data?.hundred}
              submitfuncR={redhundred}
              submitfuncG={greenhundred}
              submitfuncY={yellowhundred}
              submitfuncP={pinkhundred}
              submitfuncB={bluehundred}
              appearence={
                user?.data?.hundredjoin === "yes" || user?.data?.hundred !== "0"
                  ? true
                  : false
              }
            />
            <FrontandBack
              price={150}
              joined={user?.data?.oneFiftyjoin}
              join={joineoneFifty}
              btn={user?.data?.oneFiftyjoin === "yes" ? true : false}
              totaljoin={joinedUsers?.oneFiftyJoined}
              seeResults={result}
              classes="oneFiftyCard"
              getjoinedpeople={getjoinedpeoples}
              flipbtns={flipbtnoneFifty}
              flipnumber={"oneFiftyflip"}
              item={user?.data?.oneFifty === "0" ? "Not Declared" : user?.item}
              declaration={
                user?.data?.oneFifty === user?.item
                  ? "Win"
                  : user?.data?.oneFifty === "0" ||
                    user?.item === "Not Declared"
                  ? "Not Declared"
                  : "Loose"
              }
              Colorbtn={user?.data?.oneFiftyjoin === "yes" ? false : true}
              choosen={user?.data?.oneFifty}
              submitfuncR={redoneFifty}
              submitfuncG={greenoneFifty}
              submitfuncY={yellowoneFifty}
              submitfuncP={pinkoneFifty}
              submitfuncB={blueoneFifty}
              appearence={
                user?.data?.oneFiftyjoin === "yes" ||
                user?.data?.oneFifty !== "0"
                  ? true
                  : false
              }
            />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default RotatingCard;
