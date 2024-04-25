import { Outlet } from 'react-router-dom';

import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export default function SiteLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <main className="w-3/4 flex-grow">
                    <div className="p-4">
                        <Outlet />
                    </div>
                </main>
                <div className="w-1/4 bg-gray-200 flex justify-center items-center">
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}