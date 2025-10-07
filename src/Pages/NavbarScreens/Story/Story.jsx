import React, { useEffect, useState } from 'react';
import ApiService, { ImagePath } from '../../../Services/Apiservice';

const Story = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllStories = async () => {
    try {
      const { data } = await ApiService.post('/getAllStories');
      if (data.status && data.result) {
        setStories(data.result);
        console.log('stories data', data.result);
      } else {
        console.log('No stories found');
      }
    } catch (error) {
      console.log('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStories();
  }, []);

  return (
    <div className="w-full bg-black min-h-screen">
      <div className="py-14 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-white text-center">
            The Story
          </h1>

          {loading ? (
            <p className="text-center text-lg text-white">Loading Stories...</p>
          ) : (
            <div className="space-y-16">
              {stories.map((story, index) => (
                <div
                  key={story.id || index}
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div className="md:w-1/2">
                    {story.story_images && story.story_images.length > 0 ? (
                      <img
                        src={`${ImagePath}${story.story_images[0]}`}
                        alt={story.name || 'Story image'}
                        className="w-full h-[400px] object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
                        <p className="text-white">No image available</p>
                      </div>
                    )}
                  </div>

                  {/* Text Section */}
                  <div className="md:w-1/2 px-4 md:px-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      {story.name || 'Untitled Story'}
                    </h2>

                    {/* ✅ Designation always shows under name */}
                    <h3 className="text-lg sm:text-xl font-medium mb-6 text-gray-300">
                      {story.designataion || 'Managing Partner'}
                    </h3>

                    {story.description && (
                      <p className="text-base md:text-lg text-white leading-normal text-justify mb-4">
                        {story.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
