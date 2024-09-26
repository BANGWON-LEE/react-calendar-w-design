// import "./App.css";
import Calendar from "./Calendar";
import DayProvider from "./context/DayProvider";
import MonthProvider from "./context/MonthProvider";
import "./styles/calendar.css";
function App() {
  return (
    <>
      <MonthProvider>
        <DayProvider>
          <div className="App">
            <Calendar />
          </div>
        </DayProvider>
      </MonthProvider>
    </>
  );
}

export default App;
