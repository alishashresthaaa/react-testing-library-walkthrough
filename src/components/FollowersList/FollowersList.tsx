import { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const FollowersList = () => {
  const [followers, setFollowers] = useState<any[]>([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers: () => void = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=5");
    setFollowers(data.results);
  };

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower: any, index: number) => (
          <div className="follower-item" key={index}>
            <img src={follower.picture.large} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;
