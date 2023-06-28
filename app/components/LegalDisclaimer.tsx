import React from "react";

type Props = {};

export default function LegalDisclaimer({}: Props) {
  return (
    <>
      <p className="text-center text-sm mx-20 my-10 text-gray-500">
        Nuffield Health is acting as a credit broker to Chrysalis Finance
        registered at 1 Worsley Court, High Street, Worsley, Manchester, M28
        3NJ. Company No. 06541664. Chrysalis Finance Limited is a broker, not a
        lender. Neither party pays nor receives commission for introducing
        customers to credit. All parties named above are authorised and
        regulated by the Financial Conduct Authority. Credit offers subject to
        application and acceptance. Terms and conditions apply.{" "}
        <a className="text-blue-600" href="www.chrysalisfinance.co.uk/">
          www.chrysalisfinance.co.uk/.
        </a>
      </p>
    </>
  );
}
