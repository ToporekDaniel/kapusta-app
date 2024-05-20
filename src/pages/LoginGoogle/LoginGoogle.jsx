import React, { useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { LogoGoogle } from "./LogoGoogle";
import css from "./LoginGoogle.module.css";
// require("dotenv").config();
import { APP_ROUTES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { storeTokenInLocalStorage } from "../../lib/common";
import { useUser } from "../../lib/customHooks";

function LoginGoogle() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    // setProfile(user);
    // navigate(APP_ROUTES.HOME);
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/auth/google",
          {
            code,
          },
        );
        if (!response?.data?.id_token) {
          console.log("Something went wrong during signing in: ", response);
          return;
        }

        storeTokenInLocalStorage(response.data.id_token);
        navigate(APP_ROUTES.HOME);
      } catch (err) {
        console.log("Some error occured during signing in: ", err);
      }
    },
    flow: "auth-code",
  });

  // useEffect(() => {
  //   console.log("useEffect()-loginGoogle");
  //   // if (authenticated) {
  //   //   navigate(APP_ROUTES.DASHBOARD);
  //   // }
  // }, [profile]);

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
            <img src={profile.img} alt="" />
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
