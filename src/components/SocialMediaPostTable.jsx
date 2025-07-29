import { Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import FormatDate from './FormatDate'

function SocialMediaPostTable() {
  const { data, loading, error } = useFetchData("http://localhost:3000/social_media_posts");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;
  
  return (
    <>
      <div>
	<div className="p-10">
          <h1>Social Media Posts</h1>
	</div>
	<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
	  <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
	    <tr>
	      <th scope="col" className="px-6 py-3">Title</th>
	      <th scope="col" className="px-6 py-3">Post</th>
	      <th scope="col" className="px-6 py-3">Scheduled For</th>
	      <th scope="col" className="px-6 py-3"></th>

	    </tr>
	  </thead>
	  <tbody>
            { data.map(post => (
	      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={post.id}>
	        <td className="px-6 py-4">{post.title}</td>
	        <td className="px-6 py-4">{post.post}</td>
	        <td className="px-6 py-4">{FormatDate(post.schedule_date)}</td>
		<td className="px-6 py-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"><Link to={`/social_media_posts/${post.id}`}>View Details</Link></button></td>
	      </tr>
	    ))}
	  </tbody>
	</table>

      </div>
    </>
  )
}

export default SocialMediaPostTable;
