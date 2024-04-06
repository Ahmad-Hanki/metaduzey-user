import Container from "../Container"
import Logo from "./Logo"
import PhoneNav from "./PhoneNav/PhoneNav"

const Navbar = () => {
  return (
    <div className="">
        <Container>
            <div className="flex justify-between items-center">
                <Logo/>

                <div className="xl:hidden ">
                    <PhoneNav/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar