import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [messages, setMessages] = useState([]);
    const origin = useRef("");

    useEffect(() => {
        window.onmessage = (event) => {
            if (event.origin !== origin.current) {
                return;
            }

            console.log(event);

            setMessages((messages) => [event.data, ...messages]);
        }
    }, []);

    const updateOrigin = () => {
        const url = new URL(document.getElementById('iframe-url').value);
        origin.current = `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
    }

    const loadIframe = () => {
        document.getElementById('iframe').src = document.getElementById('iframe-url').value;
    }

    return (
        <div style={{ backgroundColor: "#282c34", minHeight: "100vh", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: 24}}>
                    <input id="iframe-url" onChange={(ev) => updateOrigin()}/>
                    <button onClick={loadIframe}>Atualizar URL</button>
                </div>

                <iframe src="https://www.google.com" width={700} height={800} id="iframe" allow="geolocation; clipboard-read; clipboard-write" style={{ border: "none" }}></iframe>

                <div style={{marginTop: 24, flexDirection: "column", display: "flex", gap: 12 }}>
                    {messages.map((message, index) => (
                        <div key={messages.length - index} style={{
                            borderWidth: 2,
                            borderColor: "#6271d9",
                            backgroundColor: "#8c99ed",
                            padding: 7,
                            borderRadius: 12,
                            animationName: "showUp",
                            animationDuration: "1s",
                        }}>
                            {messages.length - index}: {message}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
