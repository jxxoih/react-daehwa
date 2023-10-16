import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/commons/Header";
import Footer from "components/commons/Footer";
import MobileHeader from "components/commons/MobileHeader";
import MobileFooter from "components/commons/MobileFooter";

const MainLayout = (props) => {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        function handleResize() {
            let width = window.innerWidth;
            if (width <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return (
        <>
            {!isMobile && (
                <Header
                    func={props.func}
                />
            )}
            {isMobile && (
                <MobileHeader
                    func={props.func}
                />
            )}
            <Outlet />
            {!isMobile && (
                <Footer
                    func={props.func}
                />
            )}
            {isMobile && (
                <MobileFooter />
            )}
        </>
    );
}

export default MainLayout;