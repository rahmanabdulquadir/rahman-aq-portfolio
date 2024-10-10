import Navbar from "./sections/Navbar";

function App() {
  return (
    <main className="w-full h-screen bg-[url('./assets/images/noise.jpg')] bg-fixed  bg-cover ">
      <div className="bg-zinc-900">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
