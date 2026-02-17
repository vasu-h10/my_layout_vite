import "./App.css";

const items = [
  { type: "card", content: "📦 Product Card" },
  { type: "text", content: "📝 Text content block" },
  { type: "button", content: "🔘 Click Me" },
  { type: "image", content: "🖼 Image Placeholder" },
  { type: "card", content: "📦 Another Card" },
  { type: "text", content: "📝 More text here" },
  { type: "button", content: "🔘 Another Button" },
  { type: "card", content: "📦 Final Card" }
];

export default function App() {
  return (
    <main className="app">
      <h1 className="title">Scrollable Layout</h1>

      <section className="scrollable">
        {items.map((item, index) => {
          switch (item.type) {
            case "card":
              return (
                <div key={index} className="card">
                  {item.content}
                </div>
              );

            case "text":
              return (
                <p key={index} className="text">
                  {item.content}
                </p>
              );

            case "button":
              return (
                <button
                  key={index}
                  className="btn"
                  onClick={() => alert(`Clicked: ${item.content}`)}
                >
                  {item.content}
                </button>
              );

            case "image":
              return (
                <div key={index} className="image">
                  {item.content}
                </div>
              );

            default:
              return null;
          }
        })}
      </section>
    </main>
  );
}
