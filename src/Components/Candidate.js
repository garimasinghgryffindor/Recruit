import React, { useState, useEffect } from "react";
import "./Candidate.css";
import axios from "axios";
import Card from "./Card";

function Candidate() {
  const [candidates, setCandidates] = useState([]);
  const [loc , setLoc] = useState("null");
  const [role, setRole] = useState("null");

  function changeCandidates(x) {
    setCandidates(x);
  }

  async function getAllData(loc,role) {
    let url = "http://localhost:4000/getCandidates/"+loc+"/"+role;

    await axios
      .get(url)
      .then(function (res) {
        if (!res.data) {
          changeCandidates([]);
        } else {
          changeCandidates(res.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllData("null","null");
  }, []);


  function handleChangeLoc(event) {
    setLoc(event.target.value);
  }

  function handleChangeRole(event) {
    setRole(event.target.value);
  }


  async function handleSubmit (event) {
    event.preventDefault();

    // Send the login data to your server
    let url = "http://localhost:4000/getCandidates/"+loc+"/"+role;
    await axios
      .get(url)
      .then(function (res) {
        if (!res.data) {
          changeCandidates([]);
        } else {
          changeCandidates(res.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };


  return (
    <div className="candidates">
      <div className="leftPane">
        <form onSubmit={handleSubmit} className="filter-form">
          <label>
            Select Location
            <br />
            <div>
                <input type="radio" value="tehri" name="location" onChange={handleChangeLoc} /> Tehri <br/>
                <input type="radio" value="dehradun" name="location" onChange={handleChangeLoc} /> Dehradun<br/>
                <input type="radio" value="bareilly" name="location" onChange={handleChangeLoc} /> Bareilly<br/>
            </div>
          </label>
          <br /><br />
          <label>
            Select Location
            <br />
            <div>
                <input type="radio" value="SDE" name="role" onChange={handleChangeRole} /> SDE <br/>
                <input type="radio" value="JavaDeveloper" name="role" onChange={handleChangeRole} /> Java Developer<br/>
                <input type="radio" value="PHPDeveloper" name="role" onChange={handleChangeRole} /> PHP Developer<br/>
                <input type="radio" value="ML&AI" name="role" onChange={handleChangeRole} /> ML & AI<br/>
            </div>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="rightPane">
        {candidates.map(function (candidate) {
          return (
            <Card
              name={candidate.username}
              location={candidate.location}
              role={candidate.role}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Candidate;
