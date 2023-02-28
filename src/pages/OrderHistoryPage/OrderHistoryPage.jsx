import React from "react";
import { checkToken } from "../../utilities/users-service";

function OrderHistoryPage() {
  async function handleClick() {
    checkToken();
    const expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <>
      <div>OrderHisotryPage</div>
      <button onClick={handleClick}> Check When My Login Expires </button>
    </>
  );
}
export default OrderHistoryPage;
