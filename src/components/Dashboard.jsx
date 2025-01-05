import React, { useState, useEffect } from 'react';
import userIcon from '../assets/images/icons/user.png'
import checkIcon from '../assets/images/icons/check-mark.png'
import graphIcon from '../assets/images/icons/average.png'
import "../App.css"

const Dashboard = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = {
          "data": {
            "data": {
              "username": "marli_lenii",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/859176958403465218/1713367046",
              "name": "Marlene Pérez Andrioli🧚🍸",
              "id": "859176958403465218",
              "profile_image_url": "https://pbs.twimg.com/profile_images/1812002268641669120/b-05MgkH_normal.jpg"
            }
          },
          "status": 200,
          "statusText": "OK",
          "headers": {
            "content-length": "292",
            "content-type": "application/json; charset=utf-8"
          },
          "config": {
            "transitional": {
              "silentJSONParsing": true,
              "forcedJSONParsing": true,
              "clarifyTimeoutError": false
            },
            "adapter": [
              "xhr",
              "http",
              "fetch"
            ],
            "transformRequest": [
              null
            ],
            "transformResponse": [
              null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {},
            "headers": {
              "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "http://localhost:5000/api/tweets"
          },
          "request": {}
        }

          ;

        console.log(response.data.data);
        const dataAsArray = [response.data.data];
        const transformedData = dataAsArray.map(tweet => ({
          id: tweet.id,
          name: tweet.name,
          category: 'General',
          trustScore: 50,
          followers: 1000,
        }));

        setInfluencers(transformedData);
      } catch (error) {
        console.error('Error fetching tweets, Client Side', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main'>
      <div className="dashboard_info">
        <div className="content">
          <div className="title">
            <h1>Influencers Trust Leaderboard</h1>
          </div>
          <div className="info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque dicta neque debitis aliquam ut obcaecati suscipit ea facilis expedita. Error architecto minima inventore dicta provident quae nulla debitis voluptatem.</p>
          </div>
        </div>
      </div>
      <div className="dashboard_data">
        <div className="content">
          <div className="active">
            <div className="icon"><img src={userIcon} alt="" /></div>
            <div className="info">
              <div className="num">{"1,555"}</div>
              <div className="text"><span>Active Influencers</span></div>
            </div>
          </div>
          <div className="claims">
          <div className="icon"><img src={checkIcon} alt="" /></div>
          <div className="info">
            <div className="num">{"25,687"}</div>
            <div className="text"><span>Claims Verified</span></div>
          </div>
          </div>
          <div className="average">
          <div className="icon"><img src={graphIcon} alt="" /></div>
          <div className="info">
            <div className="num">{"87,6%"}</div>
            <div className="text"><span>Average Trust Score</span></div>
          </div>
          </div>
        </div>
      </div>
      <div className="dashboard_table">
        <table>
          <thead>
            <th>Rank</th>
            <th>Influencer</th>
            <th>Category</th>
            <th>Trust Score</th>
            <th>Trend</th>
            <th>Followers</th>
            <th>Verified Claims</th>
          </thead>
          <tbody>
          <tr>
            <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          <tr>
          <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          <tr>
          <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          <tr>
          <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          <tr>
          <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          <tr>
          <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          <tr>
          <td>#1</td>
            <td>Dr. Peter Attla</td>
            <td>Medicine</td>
            <td>94%</td>
            <td>⬆️</td>
            <td>1.2M+</td>
            <td>203</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;



//OG no problem code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [influencers, setInfluencers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/tweets');

//         console.log('Full response', response);

//         // Access the nested data array
//         const transformedData = response.data.data.data.map(tweet => ({
//           id: tweet.id,
//           name: tweet.text, // Using text from the tweet as the placeholder name
//           category: 'General', // Example category
//           trustScore: 50, // Placeholder trust score
//           followers: 1000, // Placeholder followers count
//         }));

//         setInfluencers(transformedData);
//       } catch (error) {
//         console.error('Error fetching tweets', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Influencer Trust Leaderboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Influencer</th>
//             <th>Category</th>
//             <th>Trust Score</th>
//             <th>Followers</th>
//           </tr>
//         </thead>
//         <tbody>
//           {influencers.map((influencer, index) => (
//             <tr key={influencer.id}>
//               <td>{index + 1}</td>
//               <td>{influencer.name}</td>
//               <td>{influencer.category}</td>
//               <td>{influencer.trustScore}%</td>
//               <td>{influencer.followers}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;