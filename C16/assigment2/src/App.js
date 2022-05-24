import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import "./index_styles.css";
import "./photo.JPG";
import props from "prop-types";

export function App() {
  return (
    <>
      <div className="top-margin"></div>
      <div className="wrapper-container">
        <PersonalInfo
          src="./photo.JPG"
          alt="..."
          introductionText="Hello, I am Robert.
         A Product Designer."
          descriptionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe natus, tempore aperiam nobis totam inventore."
        />
        <div className="middle-container">
          <div className="self_presentation">
            <SelfPresentation
              presentation="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            est eligendi optio cum modi distinctio consequuntur veritatis
            corrupti, enim nam autem ducimus quasi quae. Exercitationem
            temporibus incidunt minima mollitia provident.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            est eligendi optio cum modi distinctio consequuntur veritatis
            corrupti, enim nam autem ducimus quasi quae. Exercitationem
            temporibus incidunt minima mollitia provident."
            />
          </div>
          <div>
            <h3>Past experience</h3>
          </div>
          <Experience
            functia="VP of design"
            firma="Google,LLC"
            perioada="Jan 2022 - Present"
          />
          <Experience
            functia="Senior Product Designer"
            firma="Meta, Inc"
            perioada="2018 - 2022"
          />
          <Experience
            functia="UX Researcher"
            firma="Twitter, Inc"
            perioada="2015 - 2018"
          />
        </div>
        <div className="bottom-container">
          <PortfolioDescription portfolioDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <div className="portfolio_link">
            <Link to="./portfolio.js">All projects</Link>
            <span className="material-icons md-10">call_made</span>
          </div>
          <div className="container">
            <Tile
              firma="Techplus X"
              numeProiect="UI Product Explorations"
              descriereProiect="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
              poza="./portfolio.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactMePage() {
  return (
    <div className="ContactMePage">
      <h3>Contact</h3>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div className="PortfolioPage">
      <h3>Portfolio</h3>
      <nav>
        <Link to="/contact">Contact me</Link>
      </nav>
    </div>
  );
}
//main components in index page

function PersonalInfo(props) {
  return (
    <>
      <div className="top-container">
        <div className="photo">
          <img src={props.photo} alt={props.alt} />
        </div>
        <div className="short_introduction">
          <h1 className="introduction">{props.introductionText}</h1>
          <br />
          <p className="description">{props.descriptionText}</p>
          <Link to="/contact">Contact me</Link>
          <span className="material-icons md-10">call_made</span>
        </div>
      </div>
    </>
  );
}

function Experience(props) {
  return (
    <>
      <div className="experience">
        <div>
          <div className="functia">{props.functia}</div>
          <div>{props.firma}</div>
          <div>{props.perioada}</div>
        </div>
      </div>
    </>
  );
}

function SelfPresentation(props) {
  return (
    <>
      <h2>About Me</h2>
      <p>{props.presentation}</p>
      <Link to="/">More about me</Link>
      <span className="material-icons md-10">call_made</span>
    </>
  );
}

function PortfolioDescription(props) {
  return (
    <div className="portfolio_description">
      <h2>Portfolio</h2>
      <p>{props.portfolioDescription}</p>
    </div>
  );
}
function Tile(props) {
  return (
    <>
      <div className="some-tile">
        <span className="material-icons md-10"> repeat </span>
        <p>{props.firma}</p>
        <h4>{props.numeProiect}</h4>
        <p>{props.descriereProiect}</p>
        <Link to="">See project</Link>
        <span className="material-icons md-10">call_made</span>
      </div>
      <div>
        <img className="img_container" src={props.poza} />
      </div>
    </>
  );
}
//////main components in contactme page

function ContactMeDescription(props) {}

function SenderInfoForm(props) {}

function SocialMedia(props) {}

/////Portfolio page will use components from above


