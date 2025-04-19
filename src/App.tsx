// import "./App.css";
import WonyCalendar from './WonyCalendar'

function App() {
  return (
    <div className="App">
      <WonyCalendar type={'range'} time={false} />
      <WonyCalendar type={'datePicker'} time={false} />
    </div>
  )
}

export default App
