import Card from "./Components/Card";

function App() {
  return (
    <>
    <div className="bg-zinc-600 w-full h-screen flex gap-4">
      <h1 className="bg-green-400 text-black p-4 text-2xl rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="shashwat" btnText="Love to Click" />
      <Card username= "Shivani"  />
      </div>
    </>
  );
}

export default App;
