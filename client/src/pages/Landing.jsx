import Wrapper from "../assets/wrappers/LandingPage"
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom"
import { Logo } from "../components"

const Landing = () => {
    return (
      <Wrapper>
        <nav>
          <Logo/>
        </nav>
        <div className="container page">
          <div className="info">
            <h1>job <span>tracking</span> app</h1>
            <p>
            I am baby intelligentsia pinterest migas, brunch pork belly franzen distillery retro listicle ennui. Wayfarers tilde pitchfork, prism yr XOXO solarpunk tbh beard gochujang ugh ethical meditation. Tofu vice neutra, chicharrones selvage kale chips direct trade gatekeep pug craft beer offal subway tile organic. Gochujang plaid tbh, biodiesel succulents try-hard lyft migas single-origin coffee selfies mukbang. Hell of master cleanse gluten-free, green juice pickled hella cardigan.
            </p>
            <Link to="/register" className="btn register-link">Register</Link>
            <Link to="/login" className="btn ">Login / Demo User</Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    )
  }
  
  export default Landing