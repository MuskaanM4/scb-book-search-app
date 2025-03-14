// home page / index 
'use client';
import { useState, useEffect } from 'react';
import { Input, Table, Button } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setLoading } from '../redux/booksSlice';
import { addFavorite } from '../redux/favoritesSlice';
import Link from 'next/link';
import { toast } from 'react-toastify'; // Import toast uit react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; //css for toast

const Home = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    searchBooks('harry potter'); // Standaard zoekopdracht bij het laden zodat page niet leeg lijkt
  }, []);

  const searchBooks = async (query) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      const results = response.data.docs.map((book) => ({
        key: book.key.replace('/works/', ''), // Haal alleen de ID op
        title: book.title,
        author: book.author_name?.[0] || 'Unknown',
      }));
      dispatch(setBooks(results));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    dispatch(setLoading(false));
  };

  const handleAddFavorite = (book) => {
    dispatch(addFavorite(book));

    // Toon een notificatie wanneer een boek is toegevoegd aan favorieten
    toast.success(`${book.title} has been added to your favorites.`, {
      position: "top-right", // Plaats de notificatie rechtsboven
      autoClose: 3000, // Automatisch sluiten na 3 seconden
    });
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Link href={`/book/${record.key}`}>
            <Button type="link">View Details</Button>
          </Link>
          <Button type="link" onClick={() => handleAddFavorite(record)}>Add to Favorites</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Input.Search
        placeholder="Search for books..."
        enterButton="Search"
        size="large"
        onSearch={searchBooks}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table columns={columns} dataSource={books} loading={loading} pagination={{ pageSize: 10 }} style={{ marginTop: 20 }} />
    </>
  );
};

export default Home;