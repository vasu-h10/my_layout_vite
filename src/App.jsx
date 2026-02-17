export default function App() {
  return (
    <div className="app">
      <h1 className="title">Scrollable Layout</h1>

      <div className="feed">
        {Array.from({ length: 30 }).map((_, i) => (
          <div className="card" key={i}>
            📦 Item {i + 1}
          </div>
        ))}

        <div className="text">📝 Text content block</div>
        <button className="btn">🔘 Click Me</button>
        <div className="image">🖼 Image Placeholder</div>
      </div>
    </div>
  );
}