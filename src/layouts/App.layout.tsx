import Logo from "../componenets/Logo";
import Form from "../componenets/Form";
import PackingList from "../componenets/PackingList";
import Stats from "../componenets/Stats";

export function AppLayout(): React.JSX.Element {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
