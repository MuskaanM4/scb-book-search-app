'use client';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { removeFavorite } from '../../redux/favoritesSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorites = () => {
  const { favoriteBooks } = useSelector((state) => state.favorites); // Haal de favoriteBooks uit de state
  const dispatch = useDispatch();

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="link" onClick={() => handleRemoveFavorite(record.key)}>
          Remove
        </Button>
      ),
    },
  ];

  const handleRemoveFavorite = (bookKey) => {
    dispatch(removeFavorite(bookKey));

    // Toon een notificatie wanneer een boek is verwijderd van favorieten
    toast.success('The book has been removed from your favorites!', {
      position: 'top-right',
      autoClose: 3000, // Automatisch sluiten na 3 seconden
    });
  };

  return (
    <>
      <h1>Favorite Books</h1>
      <Table
        columns={columns}
        dataSource={favoriteBooks.map((book) => ({ ...book, key: book.key }))}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default Favorites;