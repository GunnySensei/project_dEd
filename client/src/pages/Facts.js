import React from "react";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_DEATHFACTS } from "../utils/queries";

import DeathFactForm from "../components/DeathFactForm";
import DeathFactList from "../components/DeathFactList";

const Facts = () => {
  const { loading, data } = useQuery(QUERY_DEATHFACTS);
  const deathFacts = data?.deathFacts || [];
  const loggedIn = Auth.loggedIn();

  return (
    <section className="death-fact-content">
      <div className="flex-row death-fact-content">
        {loggedIn && (
          <div className="col-12 mb-3 death-fact-form">
            <DeathFactForm />
          </div>
        )}
        <div
          className={`col-12 mb-3 death-fact-list ${loggedIn && "col-lg-8"}`}
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DeathFactList deathFacts={deathFacts} />
          )}
        </div>
      </div>
    </section>
  );

  // return (
  //   <div>
  //     <h3>{title}</h3>
  //     {deathFacts &&
  //       deathFacts.map((deathFact) => (
  //         <div key={deathFact._id} className="card mb-3">
  //           <p className="card-header">
  //             <Link
  //               to={`/profile/${deathFact.username}`}
  //               style={{ fontWeight: 700 }}
  //               className="text-light"
  //             >
  //               {deathFact.username}
  //             </Link>{" "}
  //             morbidly on {deathFact.createdAt}
  //           </p>
  //           <div className="card-body">
  //             <Link to={`/thought/${deathFact._id}`}>
  //               <p>{deathFact.thoughtText}</p>
  //               <p className="mb-0">
  //                 Reactions: {deathFact.reactionCount} || Click to{" "}
  //                 {deathFact.reactionCount ? "see" : "start"} the discussion!
  //               </p>
  //             </Link>
  //           </div>
  //         </div>
  //       ))}
  //   </div>
  // );
};

export default Facts;
