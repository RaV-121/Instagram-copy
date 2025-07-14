import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="logo">Instagram</div>
        <form>
          <input type="text" placeholder="Telefon, e-mail lub nazwa użytkownika" required />
          <input type="password" placeholder="Hasło" required />
          <button type="submit">Zaloguj się</button>
        </form>
        <div class="or">LUB</div>
        <button class="button-diffrent">Zaloguj się przez Facebooka</button>
        <div class="signup">
          Nie masz konta? <a href="#">Zarejestruj się</a>
        </div>
      </div>
    </div>
  );
}

export default App;
