import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { LogoGoogle } from "./LogoGoogle";
import css from "./LoginGoogle.module.css";
// require("dotenv").config();

function LoginGoogle() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

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
      // setUser(res);
      // });
      if (tokens) {
        setUser(tokens.data);
        // process.env.ACCES_TOKEN = tokens.access_token;
        // process.env.REFRESH_TOKEN = tokens.refresh_token;
        // process.env.ID_TOKEN = tokens.id_token;
        console.log("googleLogin - tokens:", tokens.data);
      }
    },
    flow: "auth-code",
  });

  // const googleLogin = useGoogleLogin({
  //   onSuccess: async ({ code }) => {
  //     // const tokens = await axios.get(`http://localhost:3001/api/auth/google?code=${code}`);
  // const tokens = await axios({
  //   method: "get", url: `http://localhost:3001/api/auth/google`,
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
      if (user) {
        console.log("useEffect - user: ", user);
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

        // Using Authorization Header
        axios({
          method: "get",
          url: "http://localhost:3001/api/user",
          headers: {
            Authorization: `Bearer ${user.id_token}`,
            Accept: "application/json",
          },
        }).then((response) => {
            setProfile(response.data);
          console.log("axios-get: ", response.data);
        });
        // }

        // // if (user) {
        //   axios
        //     .get(
        //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        //       {
        //         headers: {
        //           Authorization: `Bearer ${user.access_token}`,
        //           Accept: "application/json",
        //         },
        //       },
        //     )
        //     .then((res) => {
        //       setProfile(res.data);
        //     })
        //     .catch((err) => console.log(err));
      }
    },
    [user],
    // () => {
    // },
    // [profile],
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
            <img src={profile.user.img} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.user.name}</p>
            <p>Email Address: {profile.user.email}</p>
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
