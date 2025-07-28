import { useState } from 'react'
import useFetchData from './hooks/useFetchData.js'
import './App.css'

function SocialMediaPostTable() {
  const { data, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;
  
  return (
    <>
      <div>
        <h1>Social Media Posts</h1>
	<ul>
          { data.map(post => (
	    <li key={post.id}>{post.title}</li>
	  ))}
	</ul>

      </div>
    </>
  )
}

export default function App() {
  return <SocialMediaPostTable />;
}
