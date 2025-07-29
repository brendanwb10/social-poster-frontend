import { useParams, Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import FormatDate from './FormatDate'
import axios from 'axios'

function SocialMediaPostDetail() {
  const { id } = useParams(); // Gets the ID from the URL
  const { data, loading, error } = useFetchData(`http://localhost:3000/social_media_posts/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Post not found</div>;

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
        <Link to="/">← Back to Posts</Link>
      </button>
      
      <h1>{data.title}</h1>
      <p><strong>Post:</strong> {data.post}</p>
      <p><strong>Scheduled:</strong> {FormatDate(data.schedule_date)}</p>
    </div>
  );
}

export default SocialMediaPostDetail;
