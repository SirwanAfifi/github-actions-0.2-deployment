import { useQuery } from "react-query";

function App() {
  const { isLoading, data } = useQuery("userData", () => {
    const url = import.meta.env.VITE_API_URL;
    return fetch(`http://51.89.149.43:5656/users-${url || "staging"}`).then(
      (res) => res.json()
    );
  });

  return (
    <div className="h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
      <div className="w-max flex flex-col items-center">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-500 drop-shadow-xl">
          Sirwan Afifi
        </h1>
        <span className="text-lime-200">
          Published at:{" "}
          <span className="font-bold">
            {import.meta.env.VITE_PUBLISHDATETIME || "Not Updated Yet"}
          </span>
        </span>
        {isLoading && <span className="text-lime-200">Loading...</span>}
        <ul className="mt-10 w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {data &&
            data.map((user: { user: string }) => (
              <li
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                key={user.user}
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                {user.user}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
