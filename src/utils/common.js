const DisplayResize = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize(width) {
            if (width <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])
}

export default DisplayResize;