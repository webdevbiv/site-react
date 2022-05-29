// import logo from './logo.svg';
// import './App.css';
// import Button from './button';
// import List from './list';
import UserProfile from './UserProfile'

function App() {
  return (
    <div className="App">
      <UserProfile
        name='cool user'
        avatarUrl='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
      />
      <br />
      <UserProfile
        name='user'
      />
    </div >
  );
}

export default App;
