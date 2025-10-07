import Logo from "../componenets/Logo";
import Form from "../componenets/Form";
import PackingList from "../componenets/PackingList";
import Stats from "../componenets/Stats";

export function AppLayout(): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col  bg-gray-200">
      <Logo />
      <div className="flex-1 container mx-auto px-4 py-6">
        <Form />
        <PackingList />
      </div>
      <Stats />
    </div>
  );
}
