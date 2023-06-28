"use client";
import { getUserApplications } from "@/apiservices/applicationApiService";
import { useContext, useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import PrimaryButton from "../components/PrimaryButton";
import CalculationBox from "../components/CalculationBox";
Amplify.configure({ ...awsExports, ssr: true });

export default function Applications() {
  const [fetchedApplications, setFetchedApplications] = useState<any>();
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchUserApplications() {
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      const { applications } = await getUserApplications(
        authenticatedUser.signInUserSession.accessToken.jwtToken
      );
      setName(authenticatedUser.attributes.given_name);
      setFetchedApplications(applications);
    }
    fetchUserApplications();
  }, []);

  return (
    <>
      <header className="bg-green-200 h-48 md:h-32 flex flex-col md:flex-row justify-evenly items-center">
        <h1 className="text-3xl font-bold md:my-8 text-green-600">
          {name}&apos;s applications
        </h1>
        <a href={"/"}>
          <PrimaryButton type="button" text="Start new application" />
        </a>
      </header>

      <div className="flex flex-col items-center justify-center space-y-5 my-4 mx-2">
        {fetchedApplications?.map((application: any) => {
          return (
            <div
              key={application.application_id}
              className="text-green-600 bg-green-100 p-4 border-green-600 border-4 rounded-lg shadow-lg w-full md:w-1/2"
            >
              <p className="">Status: Pending</p>
              <p>APR:{application.apr}%</p>
              <CalculationBox
                loanAmount={application.loan_amount}
                monthlyPayments={application.monthly_payments}
                apr={application.apr}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
