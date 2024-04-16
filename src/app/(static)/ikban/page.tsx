import Ikban from "@/components/Ikban";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ikban",
};
const IkbanPage = () => {
  return (
    <div>
      <Ikban />
    </div>
  );
};

export default IkbanPage;
