import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Home() {
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J. D. Salinger',
    },
    {
      id: 3,
      title: 'One Hundres Years of Solitude',
      author: 'Gabriel Garcia Marquez',
    },
  ];
  return (
    <>
      <BookList books={books} />
      <hr />
      <h2>Add new book</h2>
      <BookForm />
    </>
  );
}

export default Home;
