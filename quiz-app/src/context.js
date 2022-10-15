import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [question, setQuestions] = useState([]);

  return (
    <AppContext.Provider
      value={{ waiting, loading, index, correct, error, modal, question }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
