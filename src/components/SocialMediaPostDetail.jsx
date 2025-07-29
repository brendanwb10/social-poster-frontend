import { useParams, Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import axios from 'axios'

function SocialMediaPostDetail() {
  const { id } = useParams(); // Gets the ID from the URL
  const { data, loading, error } = useFetchData(`http://localhost:3000/social_media_posts/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Post not found</div>;

  return (
    <div>
      <Link to="/">← Back to Posts</Link>
      
      <h1>{data.title}</h1>
      <p><strong>Post:</strong> {data.post}</p>
      
      {/* Add edit/delete buttons here if needed */}
    </div>
  );
}

export default SocialMediaPostDetail;
