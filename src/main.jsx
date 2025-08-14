import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { QuizProvider } from "./react-quiz-context/context/QuizContext.jsx"; {/* Just for react-quiz-context */}
import { Provider } from "react-redux"; {/* Just for redux-intro */}
import store from "./redux-intro/store.js"; {/* Just for redux-intro */}

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
    {/* <QuizProvider> {/* Just for react-quiz-context */}

    <Provider store={store}> {/* Just for redux-intro */}

      <App />

    </Provider> {/* Just for redux-intro */}

    {/* </QuizProvider> {/* Just for react-quiz-context */}
  </StrictMode>
);
