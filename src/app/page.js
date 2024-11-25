import Banner from "@/components/Homepage/Banner";
import BigDeal from "@/components/Homepage/BigDeal";
import MenCollection from "@/components/Homepage/MenCollection";

export default function Home() {
  return (
    <div>
      <Banner />
      <p className="bg-green-400 py-10 mb-96">top</p>
      <MenCollection />
      <BigDeal />
    </div>
  );
}
