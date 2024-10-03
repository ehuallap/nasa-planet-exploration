import { useState, useEffect } from 'react';
const useFetchExoplanets = (url, filterSystem) => {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("url", url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                const filtered = json.filter(item => item.solar_system === filterSystem);
                setFilteredData(filtered);
                setData(json);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, filteredData, loading, error };
};
export default useFetchExoplanets;
