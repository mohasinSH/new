
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
   const [data, setData] = useState(null); // State to hold fetched data
    const [loading, setLoading] = useState(true); // State to show loading status
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch('http://172.22.0.3:8000'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result); // Set the fetched data
            } catch (error) {
                setError(error); // Set error if there is one
            } finally {
                setLoading(false); // Data fetching complete
            }
        };
        fetchData(); 
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
