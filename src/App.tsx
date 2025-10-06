import { ItemProvider } from "./contexts/Item.context";
import { AppLayout } from "./layouts/App.layout";

export default function App() {
  return (
    <ItemProvider>
      <AppLayout />
    </ItemProvider>
  );
}
