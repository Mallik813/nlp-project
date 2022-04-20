import react, { useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleClick = async () => {
        const req = await axios.get('http://127.0.0.1:5000/');
        console.log(req)
    }

    const handleSubmission = async () => {
        console.log('idhar hoon mai', selectedFile)

        const req = await axios.post('http://127.0.0.1:5000/', { selectedFile });
        console.log(req)

    }
    return (
        <>
            <div className='App' >
                <h1> RESUME PARSER </h1>
                <h2>Upload Your resume - we will take care of the rest ;)</h2>

            </div >
            <div className='upload'>

                <div className='card'>
                    <input type="file" name="file" onChange={changeHandler} />
                    <div>
                        <button onClick={handleSubmission} > Submit </button>
                    </div>
                </div>

                {/* <table>
                    <tr>
                        <th> Field </th>
                        <th> Data </th>
                    </tr>
                </table> */}
            </div>
            <div className='data'>

            </div>
        </>
    );
}

export default App;