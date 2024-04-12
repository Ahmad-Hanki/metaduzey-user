import TerapiCards from "@/components/TerapiCards";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import EkibibmizCardHolder from "./_components/EkibibmizCardHolder";
import getBlogs from "@/actions/getBlogs";
import BlogCardsHolder from "@/app/(home)/_components/BlogCardsHolder";

export default async function Home() {
  return (
    <main>
      <div className="bg-slate-100 py-28">
        <Container>
          <TerapiCards />
        </Container>
      </div>

      <Separator />

      <div className="bg-white pb-28">
        <Container>
          <EkibibmizCardHolder />
        </Container>
      </div>

      <div className="bg-white pb-28">
        <Container>
          {/* Etkinlik ve Duyurular  sayfa */}
          <div></div>
        </Container>
      </div>


      
      <div className="bg-white pb-28">
        <Container>
          <BlogCardsHolder />
        </Container>
      </div>
    </main>
  );
}
