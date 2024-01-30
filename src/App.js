import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const iframe = document.getElementById('iframe');

        window.onmessage = (event) => {
            if (event.origin !== "http://localhost:8080") {
                return;
            }

            console.log(event);
        }
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <iframe src="http://localhost:8080/tem-colaborador/deep-link?tokenZeus=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsSWQiOjUyMjMzNywiaGVsbG8iOnRydWUsImlhdCI6MTcwNjI3ODY3OCwiZXhwIjoxNzA3MTc4Njc4LCJqdGkiOiJlOTljNzc1Yy1mY2NmLTQzNTctYjI5MS1mYzFjMmY4Y2RmMTcifQ.UPhD6ZqBwT4TtBbQREeSUXYXcxy2Z4-EKNEJkvBFP2E&feature=consulta-presencial&showHeader=true&showFooter=true&programCode=3141&showSummary=false" width={500} height={500} id="iframe" allow="geolocation"></iframe>
      </header>
    </div>
  );
}

export default App;
