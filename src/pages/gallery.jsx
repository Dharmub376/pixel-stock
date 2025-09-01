// src/pages/gallery.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('nature');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Your Pexels API key
  const PEXELS_API_KEY = 'rwKxz7PbRA5NFkiWhz9tB64A9kV6NYjsHnfwaWHMZj38EzUumXlcHtN0';

  const fetchImages = async (searchQuery = 'nepal', pageNum = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=16&page=${pageNum}`,
        {
          headers: {
            Authorization: PEXELS_API_KEY
          }
        }
      );

      if (pageNum === 1) {
        setImages(response.data.photos);
      } else {
        setImages(prevImages => [...prevImages, ...response.data.photos]);
      }

      // Check if there are more pages
      if (response.data.photos.length < 16) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages(query, 1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const downloadImage = (imageUrl, imageId, photographer) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `pexels-${photographer}-${imageId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-red-800 mb-2 drop-shadow-md">Image Gallery</h1>
          <p className="text-red-600 font-medium">Search for high-quality free images from Pexels</p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative flex-grow max-w-2xl w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for images..."
              className="w-full px-6 py-3 border border-red-300 rounded-full shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-red-900 placeholder-red-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full transition-colors duration-300 shadow-md"
            >
              Search
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-6 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading && page === 1 && (
          <div className="flex justify-center my-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        )}

        {/* Image Grid */}
        {images.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {images.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-red-100">
                  <div className="relative group">
                    <img
                      src={image.src.medium}
                      alt={image.photographer}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <button
                        onClick={() => downloadImage(image.src.original, image.id, image.photographer)}
                        className="bg-white text-red-700 px-4 py-2 rounded-full flex items-center font-medium hover:bg-red-50 transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-red-700 text-sm mb-1 font-medium">By: {image.photographer}</p>
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-700 text-xs font-medium transition-colors duration-300"
                    >
                      View on Pexels
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full flex items-center font-medium disabled:opacity-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    'Load More Images'
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!isLoading && images.length === 0 && !error && (
          <div className="text-center py-16">
            <svg className="mx-auto h-16 w-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <h3 className="mt-4 text-lg font-medium text-red-800">No images found</h3>
            <p className="mt-1 text-red-600">Try searching for something else.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;