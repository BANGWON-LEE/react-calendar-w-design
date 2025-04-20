// import "./App.css";
import WonyCalendar from './WonyCalendar'

function App() {
  return (
    <div className="App">
      <WonyCalendar type={'range'} time={false} />
      <WonyCalendar type={'datePicker'} />
    </div>
  )
}

export default App
