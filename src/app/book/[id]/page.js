'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; 
import { Card, Button, Spin } from 'antd';
import axios from 'axios';

const BookDetails = () => {
  const params = useParams(); 
  const { id } = params;
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authorNames, setAuthorNames] = useState([]); // State voor auteursnamen
  const [showFullDescription, setShowFullDescription] = useState(false); // Staat voor het tonen van volledige beschrijving

  useEffect(() => {
    if (!id) return;

    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
        setBook(response.data);

        // Controleer of de auteursinformatie beschikbaar is
        if (response.data.authors && response.data.authors.length > 0) {
          const authorIds = response.data.authors
            .filter((author) => author.key) // Zorg ervoor dat de 'key' aanwezig is
            .map((author) => author.key.split('/').pop()); 

          const authors = await Promise.all(
            authorIds.map(async (authorId) => {
              const authorResponse = await axios.get(`https://openlibrary.org/authors/${authorId}.json`);
              return authorResponse.data.name;
            })
          );
          setAuthorNames(authors);
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
      setLoading(false);
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />;
  if (!book) return <p>No book found.</p>;

  // Afkappen van de beschrijving
  const descriptionPreview = book.description?.value?.slice(0, 200); // Toon alleen de eerste 200 tekens

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <Card
        title={book.title}
        cover={
          <img
            alt={book.title}
            src={`https://covers.openlibrary.org/b/id/${book.covers?.[0]}-L.jpg`}
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        }
      >
        <p><strong>Author:</strong> {authorNames.length > 0 ? authorNames.join(', ') : 'Unknown'}</p>
        <p><strong>Published:</strong> {book.created?.value.split('T')[0] || 'Unknown'}</p>
        
        {/* Toon een preview van de beschrijving en een knop om te expanderen of te sluiten */}
        <p><strong>Description:</strong> {showFullDescription ? book.description?.value : descriptionPreview} 
          {/* Als de beschrijving niet volledig is, toon de "See More" knop */}
          {!showFullDescription && book.description?.value?.length > 200 && (
            <Button type="link" onClick={() => setShowFullDescription(true)} style={{ padding: 0 }}>
              See More
            </Button>
          )}
          {/* Als de beschrijving volledig is, toon de "Close" knop */}
          {showFullDescription && (
            <Button type="link" onClick={() => setShowFullDescription(false)} style={{ padding: 0 }}>
              Close
            </Button>
          )}
        </p>
      </Card>
      <Button type="primary" style={{ marginTop: '20px' }} onClick={() => router.push('/')}>
        Back to Search
      </Button>
    </div>
  );
};

export default BookDetails;