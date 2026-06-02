import ProfileCard from './Components/ProfileCard.jsx';

function App() {
    return(
        <>
            <div>
                <h1>First react application</h1>
                <ProfileCard
                    name="Jonathan" 
                    role="FullStack Software Developer"
                />
            </div>
        </>
    );
}

export default App;