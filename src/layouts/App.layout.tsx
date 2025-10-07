import Logo from "../componenets/Logo";
import Form from "../componenets/Form";
import PackingList from "../componenets/PackingList";
import Stats from "../componenets/Stats";

export function AppLayout(): React.JSX.Element {
  return (
    <div className="w-screen h-screen bg-gray-50 pb-12">
      <Logo />
      <div className="container mx-auto px-4">
        <Form />
        <PackingList />
        <Stats />
      </div>
    </div>
  );
}
