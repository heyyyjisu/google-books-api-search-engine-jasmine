import axios from "axios";

export async function getBooks(term) {
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q: term,
      key: apiKey,
      maxResults: 5,
    },
  });
  console.log(res.data.items);
  return res.data.items;
}
