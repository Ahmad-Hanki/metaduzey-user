import EkibimizCard from "@/components/EkibimizCard";
import TerapiCards from "@/components/TerapiCards";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="">
      <div className="bg-slate-100 py-28">
        <Container>
          <TerapiCards />
        </Container>
      </div>

      <div className="py-28">
        <Container>
          <EkibimizCard/>
        </Container>
      </div>
    </main>
  );
}
