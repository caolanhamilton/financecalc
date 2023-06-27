"use client";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure({ ...awsExports, ssr: true });
import Calculator from "./components/Calculator";
import LegalDisclaimer from "./components/LegalDisclaimer";
import { useState, useEffect, createContext, useContext } from "react";
type UserContextType = {
  userAuthDetails: any; // replace 'any' with the type of your user details
}; //UPDATE TYPE

export const UserContext = createContext<UserContextType>({
  userAuthDetails: undefined,
});
function Home() {
  const [userAuthDetails, setUserAuthDetails] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
      setUserAuthDetails(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ userAuthDetails }}>
      <div className="flex flex-col items-center justify-center h-auto bg-gray-100">
        <Calculator />
        <LegalDisclaimer />
      </div>
    </UserContext.Provider>
  );
}

export default withAuthenticator(Home);
