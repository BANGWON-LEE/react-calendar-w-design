// import "./App.css";
import Calendar from "./Calendar";
import DateRangeProvider from "./context/DateRangeProvider";
import DayProvider from "./context/DayProvider";
import OpenModalProvider from "./context/input-btn/OpenModalProvider";
import MonthProvider from "./context/MonthProvider";
import "./styles/calendar.css";
import "./styles/calendarInput.css";
import "./styles/calendarModal.css";

function App() {
  return (
    <>
      <DayProvider>
        <DateRangeProvider>
          <MonthProvider>
            <OpenModalProvider>
              <div className="App">
                <Calendar />
              </div>
            </OpenModalProvider>
          </MonthProvider>
        </DateRangeProvider>
      </DayProvider>
    </>
  );
}

export default App;
