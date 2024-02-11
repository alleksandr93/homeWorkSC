import './App.css';
import styled from 'styled-components';
import Card from './components/Card';


function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
            <Box>
                <Card/>
            </Box>

        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`