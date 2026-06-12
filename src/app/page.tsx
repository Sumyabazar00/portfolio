import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import JourneyProgress from "@/components/journey-progress";
import Ignition from "@/components/ignition";
import Marquee from "@/components/marquee";
import Highway from "@/components/highway";
import CaseDistrict from "@/components/case-district";
import Overlook from "@/components/overlook";
import Dawn from "@/components/dawn";
import { insurePlatform, dreamBox } from "@/lib/content";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <JourneyProgress />
      <main>
        <Ignition />
        <Marquee />
        <Highway />
        <CaseDistrict
          id="insure"
          km="KM 034"
          index="01"
          data={insurePlatform}
          accent="insure"
          image="/journey/district-insure.webp"
        />
        <CaseDistrict
          id="dbox"
          km="KM 058"
          index="02"
          data={dreamBox}
          accent="dbox"
          image="/journey/district-dbox.webp"
        />
        <Overlook />
        <Dawn />
      </main>
    </SmoothScroll>
  );
}
