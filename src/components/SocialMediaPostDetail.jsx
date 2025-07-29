import { useParams, Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import FormatDate from './FormatDate'
import axios from 'axios'

function SocialMediaPostDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(`http://localhost:3000/social_media_posts/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Post not found</div>;

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
        <Link to="/">← Back to Posts</Link>
      </button>
      
      <div className="text-lg p-4 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <h1>{data.title}</h1>
      </div>
      <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <div className="p-10">{data.post}</div>
      <div className="pb-10"><strong>Scheduled For:</strong> {FormatDate(data.schedule_date)}</div>
      </div>
    </div>
  );
}

export default SocialMediaPostDetail;
