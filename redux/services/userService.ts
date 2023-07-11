import axios from "axios";

let user:any
if(typeof window !==undefined){
    user= JSON.parse(localStorage.getItem("user") ||  "{}"  );
}

const url =
    process.env.BACKEND_URL;

const signup = async(userData:Signup):Promise<FuncReturn> => {
    const response = await axios.post(`https://bettingapp.onrender.com/api/signup`, userData, {
        withCredentials: true,
    });
    if (response.data) {
        localStorage.setItem("signupmessage", JSON.stringify(response.data));
        
    }
    return response.data;
};

const forgotpassword = async(userData:any) => {
    const response = await axios.post(`https://bettingapp.onrender.com/api/forgotPassword`, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const resetpassword = async(userData:ResetPass) => {
    const response = await axios.post(`https://bettingapp.onrender.com/api/resetPassword`, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const verifyingOtp = async(userData:any) => {
    const response = await axios.post(`https://bettingapp.onrender.com/api/verifyOtp`, userData);
    if (response.data) {
        localStorage.setItem("signupmessage", JSON.stringify(response.data));
    }
    return response.data;
};

const login = async(logindata:Login) => {
    const res = await axios.post(`https://bettingapp.onrender.com/api/login`, logindata, {
        withCredentials: true,
    });
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const logout = async() => {
    const res = await axios.get(`https://bettingapp.onrender.com/api/logout`, {
        withCredentials: true,
    });
    if (res.data) {
        localStorage.clear();
    }
    return res.data;
};

const updatePassword = async(userData:UpdatePassword) => {
    const response = await axios.patch(
        `https://bettingapp.onrender.com/api/updateMyPassword`,
        userData, {
            headers: { Authorization: `Bearer ${user?.token}` },
            withCredentials:true,
            
        }, 
    );
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

// const getJoinedUsers = async() => {
//     const response = await axios.get(
//         `https://bettingapp.onrender.com/api/getjoinedUser`,
//         // { headers: { Authorization: `Bearer ${user?.token}` } },
//         {
//             withCredentials: true,
//         }
//     );

//     if (response.data) {
//         localStorage.setItem("joinedUsers", JSON.stringify(response.data));
//     }
//     return response.data;
// };

const selecttenthColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/choosetenthColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};
const selecttwoHundredColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/choosetwoHundredColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};
const selecttweentyColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/choosetweentyColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};
const selectfourtyColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/choosefourtyColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selectsixtyColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/choosesixtyColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selectseventyColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/chooseseventyColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selectoneFiftyColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/chooseoneFiftyColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selecthundredColor = async(usercolor:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/choosehundredColor`,
        usercolor,
        // { headers: { Authorization: `Bearer ${user?.token}` } },
        {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const joiningUser = async(joineuser:any) => {
    const res = await axios.patch(
        `https://bettingapp.onrender.com/api/letjoine`,
        joineuser, { headers: { Authorization: `Bearer ${user?.token}` },withCredentials:true }, 
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
};

const checkColors = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/checkColor`,
        //  { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const tenjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/tenjoining`,
        // {
        //     headers: { Authorization: `Bearer ${user?.token}` },
        // },
        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const tweentyjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/tweentyjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const fourtyjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/fourtyjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const sixtyjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/sixtyjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const seventyjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/seventyjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const hundredjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/hundredjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const onefiftyjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/onefiftyjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const twohundredjoin = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/twohundredjoining`,
        // { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const resetColor = async() => {
    const res = await axios.get(
        `https://bettingapp.onrender.com/api/reset`,
        //  { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const userService = {
    login,
    logout,
    selectfourtyColor,
    selecthundredColor,
    selectsixtyColor,
    selectseventyColor,
    selecttwoHundredColor,
    selecttenthColor,
    selecttweentyColor,
    selectoneFiftyColor,
    // playerJoining,
    resetpassword,
    verifyingOtp,
    forgotpassword,
    updatePassword,
    resetColor,
    tenjoin,
    hundredjoin,
    tweentyjoin,
    twohundredjoin,
    fourtyjoin,
    sixtyjoin,
    onefiftyjoin,
    seventyjoin,
    signup,
    // getJoinedUsers,
    joiningUser,
    checkColors,
};
export default userService;