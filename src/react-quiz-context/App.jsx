import Header from "./components/Header";
import Loader from "./components/Loader"
import Error from "./components/Error"
import Question from "./components/Question"
import "./index.css";
import Main from "./Main";
import StartScreen from "./components/StartScreen";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import { useQuiz } from "./context/QuizContext";


export default function App() {
    const {status} = useQuiz()
    return (
        <div className="app">
            <Header />
            <Main>
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                {status === 'ready' && <StartScreen />}
                {status === 'active' && 
                <>
                    <Progress />
                    <Question/>
                    <Footer>
                        <Timer /> 
                        <NextButton />
                    </Footer>
                </>
                }
                {status ==='finished' && <FinishScreen />}
            </Main>
        </div>
    );
}
