import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../Redux/action";


export const HiThere = () => {
  const [data, setData] = useState([]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://saavn.me/trending")
      .then((res) => setData(res.data.results));
  }, []);

  const handleClick = (name) => {
      
    dispatch(getSong(name));
  };

  return (
    <>
      <div>
        <h2>Hi There</h2>
        <p>TRENDING NOW</p>
        <div className="trending-div">
          {data.map((e, i) => {
            if (i <= 13) {
              return (
                <div
                  className="trending-item"
                  key={i}
                  onClick={() => handleClick(e.title)}
                >
                  <img src={e.image} alt="" />
                  <p className="Songs-title">{e.title}</p>
                  {/* <p>{e.more_info.fan_count}</p> */}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
