import React from "react";
import { Alerts, Outlinedalert } from "./alerts";

export default {
  title: "Badges",
  component: Alerts,
};
export const Alertsbut = () => (
  <Alerts
    message="Primary! This is a Primary Alert - Check it now!"
    message2
    message3
    message4
  />
);
export const Alertoutline = () => (
  <Outlinedalert
    outlinemessage1
    outlinemessage2
    outlinemessage3
    outlinemessage4
  />
);
