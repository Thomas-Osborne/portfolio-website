import { Outlet } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export default function SiteLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex justify-center flex-grow">
                <div className="w-3/5 flex justify-between">
                    <main className="w-3/4">
                        <div className="p-4 bg-white dark:bg-slate-600 dark:text-gray-300">
                            <Outlet />
                        </div>
                    </main>
                    <div className="bg-gray-200 dark:bg-slate-500 w-1/4">
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
