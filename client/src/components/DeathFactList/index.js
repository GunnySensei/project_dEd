import React from "react";
import { Link } from "react-router-dom";

const DeathFactList = ({ deathFacts }) => {
  if (!deathFacts.length) {
    return <h3>No Facts Yet</h3>;
  }

  return (
    <div className="flex-row">
      <div className="page-title">
        <h3>Death Facts</h3>
      </div>
      <div className="page-content flex-row">
        {deathFacts &&
          deathFacts.map(deathFact => (
            <div key={deathFact._id} className="card mb-3">
              <div className="card-body">
                <Link to={`/fact/${deathFact._id}`}>
                  <p>{deathFact.deathText}</p>
                  {/* <p className="mb-0">
                    Reactions: {deathFact.reactionCount} || Click to{" "}
                    {deathFact.reactionCount ? "see" : "start"} the discussion!
                  </p> */}
                </Link>
              </div>
              <p className="card-header">
                <Link
                  to={`/profile/${deathFact.username}`}
                  style={{ fontWeight: 700 }}
                  className="text-light"
                >
                  {deathFact.username}
                </Link>{''}
                morbidly pondered on {deathFact.createdAt}
              </p>
              {/* <div className="card-body">
              <Link to={`/thought/${deathFact._id}`}>
                <p>{deathFact.thoughtText}</p>
                <p className="mb-0">
                  Reactions: {deathFact.reactionCount} || Click to{" "}
                  {deathFact.reactionCount ? "see" : "start"} the discussion!
                </p>
              </Link>
            </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DeathFactList;
