import { Outlet } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export default function SiteLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex justify-center flex-grow">
                <div className="w-full md:w-4/5 lg:w-3/5 flex flex-col-reverse md:flex-row justify-between">
                    <main className="md:w-2/3">
                        <div className="p-4 bg-white dark:bg-slate-600 dark:text-gray-300 h-full">
                            <Outlet />
                        </div>
                    </main>
                    <div className="flex justify-center w-full md:w-1/3 border border-red-500 bg-gray-200 dark:bg-slate-500">
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
