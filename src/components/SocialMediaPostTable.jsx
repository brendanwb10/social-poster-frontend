import { Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'

const formatDate = (date) => {
  const dateToFormat = new Date(date)
  const month = dateToFormat.getMonth() + 1
  const day = dateToFormat.getDate()
  const year = dateToFormat.getFullYear()

  const formattedDate = month + "/" + day + "/" + year

  return formattedDate
}

function SocialMediaPostTable() {
  const { data, loading, error } = useFetchData("http://localhost:3000/social_media_posts");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;
  
  return (
    <>
      <div>
        <h1>Social Media Posts</h1>
	<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
	  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
	    <tr>
	      <th scope="col" className="px-6 py-3">Title</th>
	      <th scope="col" className="px-6 py-3">Post</th>
	      <th scope="col" className="px-6 py-3">Scheduled For</th>
	    </tr>
	  </thead>
	  <tbody>
            { data.map(post => (
	      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={post.id}>
	        <td className="px-6 py-4">{post.title}</td>
	        <td className="px-6 py-4">{post.post}</td>
	        <td className="px-6 py-4">{formatDate(post.schedule_date)}</td>
		<td className="px-6 py-4"><Link to={`/social_media_posts/${post.id}`}>View Details</Link></td>
	      </tr>
	    ))}
	  </tbody>
	</table>

      </div>
    </>
  )
}

export default SocialMediaPostTable;
