import Main from "./components/Main";

// https://getalby.com/oauth?client_id=v7Lfkmjfzy&response_type=code&redirect_uri=https://localhost:3000&scope=account:read%20invoices:create%20invoices:read%20transactions:read%20balance:read%20payments:send

/**
 * 
 * MAIN PAGE 
 * 
 */
export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 h-max border border-grey-500">
      <Main/>
      <h6>Not in a million years</h6>
    </div>
  )
}
