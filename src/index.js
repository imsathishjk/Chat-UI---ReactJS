import ReactDOM from 'react-dom/client';
import "./style.css"
import Dhoni from "./assets/images/Dhoni.jpg"
import Kohli from "./assets/images/Kholi.jpg"
import Faf from "./assets/images/Faf.jpg"
import Raina from "./assets/images/Raina.jpg"
import Rohit from "./assets/images/Rohit.jpg"
import Vijay from "./assets/images/Vijay.jpg"
import Warner from "./assets/images/Warner.jpeg"
const root = ReactDOM.createRoot(document.getElementById('root'));
function Chat() {
  const contents = [
    {
      name: "MS Dhoni",
      message: "I live for the moment.not the future, not the past.",
      time: "13.47",
      star: "★",
      title: Dhoni
    },
    {
      name: "Virat Kohli",
      message: "I live for the moment.not the future, not the past.",
      time: "12.21",
      star: "★",
      title: Kohli
    },
    {
      name: "Faf Du Plessis",
      message: "I live for the moment.not the future, not the past.",
      time: "11.07",
      star: "★",
      title: Faf
    },
    {
      name: "Suresh Raina",
      message: "I live for the moment.not the future, not the past.",
      time: "10.27",
      star: "★",
      title: Raina
    },
    {
      name: "Rohit Sharma",
      message: "I live for the moment.not the future, not the past.",
      time: "08.50",
      star: "★",
      title: Rohit
    },
    {
      name: "Leo Das",
      message: "I live for the moment.not the future, not the past.",
      time: "06.25",
      star: "★",
      title: Vijay
    },
    {
      name: "David Warner",
      message: "I live for the moment.not the future, not the past.",
      time: "03.10",
      star: "★",
      title: Warner
    }
  ]
  return (
    <div className='chat-wrapper'>
      <div class="header">
        <h2>Whatsapp</h2>
        <div class="navbar">
          <span class="progress"><i class="fa-solid fa-spinner"></i></span>
          <span class="toggle"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        </div>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search..."></input>
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
      </div>
      {
        contents.map(function (content) {
          return <div className="chat-tile">
            <div className="img-area">
              <img className='img-area' src={content.title} alt={content.name}></img>
            </div>
            <div className="text-tile">
              <h4>{content.name}</h4>
              <p>{content.message}</p>
            </div>
            <div className="time-tag">
              <p>{content.time}</p>
              <p className='star'>{content.star}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

root.render(
  <Chat></Chat>
);