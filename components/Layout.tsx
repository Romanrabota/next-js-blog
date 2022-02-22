import React, { ReactNode, useMemo } from 'react';
import Header from 'components/SiteHeader';
import Filters from 'components/SearchFilters';

interface ILayoutProps {
    className?: string;
    children: ReactNode;
}

function Layout(props: ILayoutProps) {
    const { children, className } = props;
    return (
        <div id="app" className=" min-h-screen  bg-gray-200 antialiased xl:flex  xl:flex-col  xl:h-screen">
            <Header className="xl:flex-shrink-0"/> 
            <div className="xl:flex-1  xl:flex xl:overflow-y-hidden"> 
                <Filters/> 

                <main className="py-6  xl:flex-1  xl:overflow-x-hidden">

                    {children}

                </main>

            </div>

            <div className='h-screen lg:h-auto'/>
        </div>
    );
}

export default Layout;