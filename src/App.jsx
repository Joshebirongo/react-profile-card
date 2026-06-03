import ProfileCard from './Components/ProfileCard.jsx';
import SkillsList from './Components/SkillsList.jsx';
function App() {
    return(
        <>
            <div>
                <h1>First react application</h1>

                <ProfileCard
                    name="Jonathan" 
                    role="FullStack Software Developer"
                />

                <SkillsList />
            </div>
        </>
    );
}

export default App;