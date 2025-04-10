import Card from "./Card";
import { FaCode, FaRegLightbulb, FaEnvelope } from "react-icons/fa";

export default function CardProject() {
  return (
    <div className=" flex justify-center items-center p-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        <Card title="Thiết kế Web" projects="120" icon={<FaCode />} />
        <Card title="Ui/Ux Design" projects="241" icon={<FaRegLightbulb />} />
        <Card title="SEO" projects="240" icon={<FaRegLightbulb />} />
        <Card title="Marketing" projects="331" icon={<FaEnvelope />} />
      </div>
    </div>
  );
}