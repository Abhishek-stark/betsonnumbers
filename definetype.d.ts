type Signup = {
    "name":string,
    "mobileNumber":string,
    "password":string,
    "confirmPassword":string,
    "reference"?:string,
}


type formdata={
    name: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
}
type verifyType={
     otps: {
        getOtp: string;
    }
}


type InitialState={
    user: any,
    signupmessage: any,
    // userUpdate: userUpdate ? userUpdate : null,
    // result: result ? result : null,
    joinedUsers:any,
    isError: boolean,
    isSuccess: boolean,
    isLoading:boolean,
    message: any,
}
type ResetPass={
    "otp":string,
    "changePassword": string
   
}

type Login ={
    "mobileNumber":string,
    "password":string
}

type UpdatePassword={
    "password":string,
    "confirmPassword":string
}

type FuncReturn = {
    status: "success",
        "item":string,
        "message":any,
        token:any,
        data: {
            name:string,
            mobileNumber:string,
            balance:number,
            bonus:string,
            tenth:string,
            sixty:string,
            hundred:string,
            oneFifty:string,
            twoHundred:string,
            fourty:string,
            tweenty:string,
            seventy:string,
            seventyjoin:string,
            tenthjoin:string,
            tweentyjoin:string,
            hundredjoin:string,
            twoHundredjoin:string,
            fourtyjoin:string,
            sixtyjoin:string,
            oneFiftyjoin:string,
            tenthWin:string,
            hundredWin:string,
            tweentyWin:string,
            fourtyWin:string,
            oneFiftyWin:string,
            seventyWin:string,
            sixtyWin:string,
            referId:string,
        },
}