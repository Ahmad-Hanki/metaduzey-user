import heroImage from "../../assets/images/Hero.jpg";
import Container from "./Container";

interface HeroProps {
  title: string;
  path: string;
}
const Hero = ({ title, path }: HeroProps) => {
  return (
    <Container>
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/6c/f1/b0/6cf1b0824e23aa6b830b6962337615be.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{path}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
