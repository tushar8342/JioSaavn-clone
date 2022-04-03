import artistInfo from "./artist.json";
import "./artist.css";
import axios from "axios";
import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getSong} from "../../../Redux/action"
import {store} from "../../../Redux/store"

export const Artists = () => {
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch()

  const handleClick = (name) => {
    
   dispatch(getSong(name))
  };
  useEffect(() => {
    console.log(response);
  }, [response]);
  return (
    <>
      <h1 id="ArtistMainHeading">Top Artists</h1>
      <div className="ArtistMainDiv">
        {artistInfo.selection1.map((e) => {
          return (
            <div
              key={uniqid()}
              className="ArtistSecondaryDiv"
              onClick={() => {
                handleClick(e.name)
              }}
            >
              <div className="ArtistContainer">
                <img className="artistImg" src={e.url} alt="" />
                <div className="ArtistMiddle">
                  <div>
                    <img
                      src="https://www.nicepng.com/png/detail/8-80536_circular-play-button-svg-png-icon-free-download.png"
                      className="ArtistLogo"
                      alt="playLogo"
                    />
                  </div>
                </div>
              </div>
              <p className="artistName">{e.name}</p>
              <p>{Math.floor(Math.random() * 10000000)} Fans</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
