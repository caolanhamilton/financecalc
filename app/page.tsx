"use client";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure({ ...awsExports, ssr: true });
import Calculator from "./components/Calculator";
import LegalDisclaimer from "./components/LegalDisclaimer";
import { useState, useEffect, createContext, useContext } from "react";
import { getUserApplications } from "@/apiservices/applicationApiService";
import { postUser } from "@/apiservices/userApiService";
type UserContextType = {
  userJWT: any; // replace 'any' with the type of your user details
}; //UPDATE TYPE

export const UserContext = createContext<UserContextType>({
  userJWT: undefined,
});
function Home() {
  const [userJWT, setUserJWT] = useState();

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
  console.log(userJWT);
  return (
    <UserContext.Provider value={{ userJWT }}>
      <div className="flex flex-col items-center justify-center h-auto bg-gray-100">
        <Calculator />
        <LegalDisclaimer />
      </div>
    </UserContext.Provider>
  );
}

export default withAuthenticator(Home);
