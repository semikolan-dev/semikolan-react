import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/uxmeetup.css";
import UXLanding from "../component/UXLanding";
import UXAbout from "../component/UXAbout";
import UXLayout from "../layouts/UXLayout";
import UXCommunity from "../component/UXCommunity.js";
import UXSpeakers from "../component/UXSpeakers";
import uxmeetup from "../json/uxmeetup.json";
import Venue from "../component/Venue";
import Companies from "../component/Companies";

export default function UXMeetup() {
  return (
    <>
      <UXLayout title="UX Meetup | SemiKolan">
        <UXLanding
          lottiename="uxmeetup"
          // redirect="#ux-meetup"
          p1="Bringing to you the Bhopal’s first ever UX meetup!"
          p2="Bhopal UX Meetup"
          p3="On 27th Feb 2023"
          buttontext="Register Now"
        />

        <UXAbout
          num="01."
          titleline="About"
          content={uxmeetup.about.content}
          removeViewMore
        />

        <UXSpeakers
          num="02."
        />

        <Companies num="03." companies={uxmeetup.companies} />

        <UXCommunity num="04." Community={uxmeetup.community.slice(0, 4)} />

        <Venue num="05." />
      </UXLayout>
    </>
  );
}
