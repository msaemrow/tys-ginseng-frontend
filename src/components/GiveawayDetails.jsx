import React from "react";
import "../css/GiveawayDetails.css";
import { FARM_TO_TABLE_LINK } from "../constants";
import { trackEvent } from "../utils/analytics";

const GiveawayDetails = () => {
  return (
    <div className="giveaway-container">
      <h1>Savannah Bananas Giveaway Details</h1>
      <div className="giveaway-body">
        <p>
          Every $70 purchased gets you automatically entered for a chance to win
          2 Savannah Bananas baseball tickets. The more you spend, the more
          entries you get! The game is on Aug 8th at Target Field in
          Minneapolis. Don't miss out on this exciting opportunity to enjoy a
          fun day of baseball with the Savannah Bananas!
        </p>
        <p>Game Date: August 8th, 2026</p>
        <p>Drawing Date: August 1st, 2026</p>
        <p>Location: Target Field, Minneapolis</p>
        <p>How to enter: Spend $70 or more on our products</p>
        <div className="w-100 justify-content-center d-flex mt-4">
          <a
            className="giveaway-btn btn"
            href={FARM_TO_TABLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("shop_now_click", {
                button_text: "Buy Online Now",
                link_location: "giveaway_page",
              })
            }
          >
            Buy Online Now
          </a>
        </div>
        <p className="giveaway-terms">
          Terms and conditions: Making a purchase of $70 (before shipping) or
          more automatically enters you into the giveaway. Every $70 purchasd
          gets one entry. Example $70 = 1 entry, $140 = 2 enties, $210 = 3
          entries, etc. Purchase can be made online or in person at the
          Minneapolis Farmers's Market. Purchasing products does not guarantee a
          win. Winner will be notified via email entered at checkout. Winner
          will have 48 hours to respond to the email. If the initial winner does
          not replay or declines the tickets, another winner will be selected.
          The giveaway is open to legal residents of the United States who are
          18 years of age or older at the time of entry. Ty's Ginseng reserves
          the right to disqualify any entrant who violates these terms and
          conditions or engages in fraudulent activity. The giveaway is subject
          to all applicable federal, state, and local laws and regulations. By
          entering the giveaway, participants release and hold harmless Ty's
          Ginseng from any liability arising out of or in connection with the
          giveaway or any prize won.
        </p>
      </div>
    </div>
  );
};

export default GiveawayDetails;
