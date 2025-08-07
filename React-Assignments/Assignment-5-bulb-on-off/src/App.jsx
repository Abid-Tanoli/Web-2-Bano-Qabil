import Room from "./components/Room";
import "./index.css";

export default function App() {
  return (
    <>
    <h1>💡 Bulb Project</h1>
      <h3>Assignment 4</h3>
    <div className="room-wrapper">
      <Room title="Study Room 📚" />
      <Room title="Living Room 🛋️" />
      <Room title="Guest Room 🛏️" />
    </div>
    </>
  );
}
