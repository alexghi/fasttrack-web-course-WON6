import useFetch from "react-fetch-hook";

export default function App() {
    const { isLoading, data, error } = useFetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return (
      // ...
    );
  }