import TerapiCards from "@/components/TerapiCards";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import EkibibmizCardHolder from "./_components/EkibibmizCardHolder";
import BlogCardsHolder from "@/app/(home)/_components/BlogCardsHolder";
import { Suspense } from "react";
import Loading from "../loading";
import HowToWorkHero from "./_components/HowToWorkHero";
import HowToWorkHeroMetin from "./_components/HowToWorkHeroMetin";

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

      <div className="flex flex-col w-full lg:flex-row gap-10 lg:gap-0 bg-slate-200 pt-10">
        <div className="lg:w-7/12 p-2">
          <HowToWorkHeroMetin />
        </div>

        <div className="bg-base-200 lg:w-5/12 overflow-hidden">
          <Container>
            <HowToWorkHero />
          </Container>
        </div>
      </div>

      <div className="bg-white pb-28 py-10">
        <Container>
          <Suspense fallback={<Loading />}>
            <BlogCardsHolder />
          </Suspense>
        </Container>
      </div>
    </main>
  );
}
