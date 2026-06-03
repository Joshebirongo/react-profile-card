import ProfileCard from './Components/ProfileCard.jsx';
import SkillsList from './Components/SkillsList.jsx';
import CertificationsList from './Components/CertficationsList.jsx';
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
                
                <CertificationsList/>
            </div>
        </>
    );
}

export default App;