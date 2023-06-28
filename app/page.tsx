"use client";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure({ ...awsExports, ssr: true });
import Calculator from "./components/Calculator";
import LegalDisclaimer from "./components/LegalDisclaimer";
import { useState, useEffect, createContext } from "react";
import { postUser } from "@/apiservices/userApiService";
type UserContextType = {
  userJWT: string;
};

export const UserContext = createContext<UserContextType>({
  userJWT: "",
});
function Home() {
  const [userJWT, setUserJWT] = useState("");

  useEffect(() => {
    async function getCurrentAuthenticatedUser() {
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      setUserJWT(authenticatedUser.signInUserSession.accessToken.jwtToken);
      let user = {
        email: authenticatedUser.attributes.email,
        first_name: authenticatedUser.attributes.given_name,
        second_name: authenticatedUser.attributes.family_name,
      };
      postUser(user, authenticatedUser.signInUserSession.accessToken.jwtToken);
    }

    getCurrentAuthenticatedUser();
  }, []);
  return (
    <UserContext.Provider value={{ userJWT }}>
      <div className="flex flex-col items-center justify-between h-screen bg-gray-100">
        <Calculator />
        <LegalDisclaimer />
      </div>
    </UserContext.Provider>
  );
}

export default withAuthenticator(Home);
