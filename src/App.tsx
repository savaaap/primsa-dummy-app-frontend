import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

function App() {
  // Dummy data
  const users: User[] = [
    {
      name: "Test User",
      messages: [
        {
          body: "Hey this is test!",
        },
        {
          body: "Another message :)",
        },
      ],
    },
  ];
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12">
      {users.map((user, index) => {
        return <UserDisplay key={`${user.name}-${index}`} user={user} />;
      })}
    </div>
  );
}

export default App;
