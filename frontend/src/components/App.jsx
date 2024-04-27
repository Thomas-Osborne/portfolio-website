import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SiteLayout from './SiteLayout';
import NotFound from './NotFound';

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/blog/Blog';
import Projects from '../pages/projects/Projects';
import ProjectInfo from '../pages/projects/ProjectInfo';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectInfo />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}