// import "./App.css";
import Calendar from "./Calendar";
import DayProvider from "./context/DayProvider";
import OpenModalProvider from "./context/input-btn/OpenModalProvider";
import MonthProvider from "./context/MonthProvider";
import "./styles/calendar.css";
import "./styles/calendarInput.css";
import "./styles/calendarModal.css";

function App() {
  return (
    <>
      <OpenModalProvider>
        <MonthProvider>
          <DayProvider>
            <div className="App">
              <Calendar />
            </div>
          </DayProvider>
        </MonthProvider>
      </OpenModalProvider>
    </>
  );
}

export default App;
