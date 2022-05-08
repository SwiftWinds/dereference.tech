import Deso from "deso-protocol";

export function DesoBtn() {
  async function sendDeso() {
    const deso = new Deso();
    const request = {
      "SenderPublicKeyBase58Check": "BC1YLheA3NepQ8Zohcf5ApY6sYQee9aPJCPY6m3u6XxCL57Asix5peY",
      "RecipientPublicKeyOrUsername": "BC1YLh44NNoBXyyDpoYNCdFbS246NfieUAHZzWKhv4zwNpYRev2hBcN",
      "AmountNanos": 1,
      "MinFeeRateNanosPerKB": 1000,
    };
    console.log(deso.identity.getUserKey());
    const response = await deso.wallet.sendDesoRequest(request);
    console.log("res", response);
  }

  return <button
    onClick={sendDeso}
    className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Click me
  </button>;
}
