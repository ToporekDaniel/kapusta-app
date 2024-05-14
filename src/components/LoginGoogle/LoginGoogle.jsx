import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { LogoGoogle } from "./LogoGoogle";
import css from "./LoginGoogle.module.css";
// require("dotenv").config();

function LoginGoogle() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [auth, setAuth] = useState([]);

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // const googleLogin = useGoogleLogin({
  //     flow: 'auth-code',
  //     onSuccess: async (codeResponse) => {
  //         console.log(codeResponse);
  //         const tokens = await axios.post(
  //             'http://localhost:3001/api/auth/google', {
  //                 code: codeResponse.code,
  //             });
  //
  //         console.log(tokens);
  //     },
  //     onError: errorResponse => console.log(errorResponse),
  // });

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const tokens = await axios.post("http://localhost:3001/api/auth/google", { // http://localhost:3001/auth/google backend that will exchange the code
        code,
      });
      // .then((res) => {
      // setAuth(res);
      // });
      if (tokens) {
        setAuth(tokens);
        // process.env.ACCES_TOKEN = tokens.access_token;
        // process.env.REFRESH_TOKEN = tokens.refresh_token;
        // process.env.ID_TOKEN = tokens.id_token;
        // console.log(tokens);
      }
    },
    flow: "auth-code",
  });

  // const googleLogin = useGoogleLogin({
  //   onSuccess: async ({ code }) => {
  //     // const tokens = await axios.get(`http://localhost:3001/api/auth/google?code=${code}`);
  //
  // const tokens = await axios({
  //   method: "get",
  //   url: `http://localhost:3001/api/auth/google`,
  //   params: {
  //     code,
  //   },
  // });
  //
  //     console.log(tokens);
  //   },
  //   flow: 'auth-code',
  // });

  useEffect(
    () => {
      if (auth) {
        // axios
        //   .get(
        //     `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        //     {
        //       headers: {
        //         Authorization: `Bearer ${user.access_token}`,
        //         Accept: "application/json",
        //       },
        //     },
        //   )
        //   .then((res) => {
        //     setProfile(res.data);
        //   })
        //   .catch((err) => console.log(err));

        // axios
        //   .get(`http://localhost:3001/api/user`)
        //   .then((res) => {
        //     setProfile(res.data);
        //   })
        //   .catch((err) => console.log(err));
      
      // Using Authorization Header
      axios({
        method: "get",
        url: "http://localhost:3001/api/user",
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }).then((response) => {
        console.log(response.data);
      });
      }
    },
    [auth],
    () => {
      // if (profile) {
      //   axios
      //     .post(
      //       "https://kapusta-backend.goit.global/auth/google" -H  "accept: */*",
      //       {
      //         body: {
      //           email: profile.email,
      //           // password
      //           name: profile.name,
      //         }
      //
      //       }
      //     )
      // }
    },
    [profile],
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      {profile
        ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut} className={css.gsiMaterialButton}>
              <div className={css.gsiMaterialButtonContentWrapper}>
                <LogoGoogle />
                <span className="gsiMaterialButtonContents">Log out</span>
              </div>
            </button>
            {
              /* <button onClick={logOut} className={css.gsiMaterialButton}>
                   Log out
                 </button>
              */
            }
          </div>
        )
        : (
          <button onClick={googleLogin} className={css.gsiMaterialButton}>
            <div className={css.gsiMaterialButtonContentWrapper}>
              <LogoGoogle />
              <span className="gsiMaterialButtonContents">Google</span>
            </div>
          </button>
        )}
    </div>
  );
}

export { LoginGoogle };
