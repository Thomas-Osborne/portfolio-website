import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SiteLayout from './SiteLayout';
import NotFound from './NotFound';

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';

export default function App() {
  return (
    <>
      <h1 className="testing">Hi</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="projects" element={<Projects />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}