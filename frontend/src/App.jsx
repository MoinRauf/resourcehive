import { cn } from "@/utils";

function App() {
  return (
    <>
      <div data-theme="light" className="min-h-screen w-screen">
        <button className={cn("btn btn-active btn-primary")}>Primary</button>
      </div>
    </>
  );
}

export default App;
