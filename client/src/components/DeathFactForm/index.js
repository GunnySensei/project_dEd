import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_DEATHFACT } from "../../utils/mutations";
import { QUERY_DEATHFACTS } from "../../utils/queries";

const DeathFactForm = () => {
  const [deathText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addDeathFact, { error }] = useMutation(ADD_DEATHFACT, {
    update(cache, { data: { addDeathFact } }) {
      try {
        // update fact array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { deathFacts } = cache.readQuery({ query: QUERY_DEATHFACTS });
        cache.writeQuery({
          query: QUERY_DEATHFACTS,
          data: { deathFacts: [addDeathFact, ...deathFacts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, deathFacts: [...me.deathFacts, addDeathFact] } },
      // });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDeathFact({
        variables: { deathText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="death-fact-title">
      <div className="">
        <h3>Death Facts</h3>
      </div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form className="flex-row" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Here's a morbid fact..."
          value={deathText}
          className="death-fact-form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeathFactForm;
