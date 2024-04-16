import RanduvuAlFormu from "@/components/RanduvuAlFormu";
import Container from "@/components/ui/Container";
import RandevuMetin from "./RandevuMetin";

const RandevuClient = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <Container>
        <RanduvuAlFormu size={true}/>
        <RandevuMetin />
      </Container>
    </div>
  );
};

export default RandevuClient;
