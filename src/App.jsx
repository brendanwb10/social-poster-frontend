import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialMediaPostTable from './components/SocialMediaPostTable';
import SocialMediaPostDetail from './components/SocialMediaPostDetail'
import './App.css'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SocialMediaPostTable />} />
        <Route path="/social_media_posts/:id" element={<SocialMediaPostDetail />} />
      </Routes>
    </Router>
  );
}
