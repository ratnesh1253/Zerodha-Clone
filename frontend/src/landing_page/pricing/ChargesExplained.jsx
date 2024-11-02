import React from "react";

function ChargerExplained() {
  return (
    <div className="container mt-5 text-muted">
      <h1 className="fs-3">Charges explained</h1>
      <div className="row mt-3 mt-sm-5">
        <div className="col-12 col-sm-6">
          <h2 className="fs-5">Securities/Commodities transaction tax</h2>
          <p style={{ fontSize: "12px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p style={{ fontSize: "12px" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h2 className="fs-5">Transaction/Turnover Charges</h2>
          <p style={{ fontSize: "12px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h2 className="fs-5">Call & trade</h2>
          <p style={{ fontSize: "12px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h2 className="fs-5">Stamp charges</h2>
          <p style={{ fontSize: "12px" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h2 className="fs-5">NRI brokerage charges</h2>
          <p style={{ fontSize: "12px" }}>
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </p>
          <h2 className="fs-5">Account with debit balance</h2>
          <p style={{ fontSize: "12px" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h2 className="fs-5">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h2>
          <p style={{ fontSize: "12px" }}>
            <ul>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </p>
        </div>
        <div className="col-12 col-sm-6">
          <h2 className="fs-5">GST</h2>
          <p style={{ fontSize: "12px" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h2 className="fs-5">SEBI Charges</h2>
          <p style={{ fontSize: "12px" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h2 className="fs-5">DP (Depository participant) charges</h2>
          <p style={{ fontSize: "12px" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h2 className="fs-5">Pledging charges</h2>
          <p style={{ fontSize: "12px" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <h2 className="fs-5">AMC (Account maintenance charges)</h2>
          <p style={{ fontSize: "12px" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.
          </p>
          <p style={{ fontSize: "12px" }}>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days).
          </p>
          <h2 className="fs-5">Corporate action order charges</h2>
          <p style={{ fontSize: "12px" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h2 className="fs-5">Off-market transfer charges</h2>
          <p style={{ fontSize: "12px" }}>
            ₹25 or 0.03% of the transfer value (whichever is higher)
          </p>
          <h2 className="fs-5">Physical CMR request</h2>
          <p style={{ fontSize: "12px" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h2 className="fs-5">Payment gateway charges</h2>
          <p style={{ fontSize: "12px" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <h2 className="fs-5">Delayed Payment Charges</h2>
          <p style={{ fontSize: "12px" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
          </p>
        </div>
      </div>
      <div className="row mt-3 mt-sm-5">
        <h2 className="fs-5">Disclaimer</h2>
        <p style={{ fontSize: "12px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
      <div>
        <h2 className="fs-5 mt-3 mt-sm-5 mb-3">Charges for account opening</h2>
        <table className="table p-5">
          <thead className="border table-active">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody className="border">
            <tr>
              <td className="text-muted">Online account</td>
              <td>
                <span className="btn btn-success">free</span>
              </td>
            </tr>
            <tr>
              <td className="text-muted">Offline account</td>
              <td>
                <span className="btn btn-success">free</span>
              </td>
            </tr>
            <tr>
              <td className="text-muted">NRI account (offline only)</td>
              <td className="text-muted">₹ 500</td>
            </tr>
            <tr>
              <td className="text-muted">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="text-muted">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChargerExplained;
