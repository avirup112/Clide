import { createCliRenderer} from "@opentui/core";
import { createRoot } from "@opentui/react";
import { header as Header } from "./components/header";
import { StatusBar } from "./components/status-bar";
import { InputBar } from "./components/input-bar";

function App() {
  return (
    <box 
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      backgroundColor="black"
      gap={2}
    >
      <Header />
      <box width="100%" maxWidth={78} paddingX={2}>
        <InputBar onSubmit={() => {}} />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
