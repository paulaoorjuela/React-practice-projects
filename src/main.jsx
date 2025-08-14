import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuizProvider } from "./react-quiz-context/context/QuizContext.jsx"; {/* Just for react-quiz-context */}
import store from "./redux-intro/store.js"; {/* Just for redux-intro */}
store.dispatch({type: 'account/deposit', payload: 250})
console.log(store.getState());


// import App from './basics/App.jsx'
// import App from './pizza-menu/App.jsx'
// import App from './steps/App.jsx'
// import App from './far-away/App.jsx'
// import App from './date-record/App.jsx'
// import App from './text-expander/App.jsx'
// import App from './how-react-works/App.jsx'
// import App from './currency-converter/App.jsx'
// import App from './geolocate/App.jsx'
// import App from './react-quiz/App.jsx'
// import App from "./react-quiz-context/App.jsx";
// import App from './useReducer-bank/App.jsx'
// import App from './the-atomic-blog/App.jsx'
// import App from './workout-timer/App.jsx'
import App from './redux-intro/App.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider> {/* Just for react-quiz-context */}
      <App />
    </QuizProvider> {/* Just for react-quiz-context */}
  </StrictMode>
);
