export const dynamic = "force-dynamic";

import Arrivals from "@/components/Homepage/Arrivals";
import Banner from "@/components/Homepage/Banner";
import BigDeal from "@/components/Homepage/BigDeal";
import MenCollection from "@/components/Homepage/MenCollection";
import OfferSection from "@/components/Homepage/OfferSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Arrivals />
      <OfferSection />
      <MenCollection />
      <BigDeal />
    </div>
  );
}
