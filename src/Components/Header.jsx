import { useNavigate } from "react-router";

//Fiction, Romance, Fantasy, Morality, Society, Power, Justice, Adventure, Tragedy, War , Philosophy
export default function Header() {
  return (
    <div>
      <input type="text" name="search-box" />

      {/* nav bar with options, dont feel like its needed to make another folder for */}
      <nav>
        <select defaultValue="">
          <option value="" disabled>
            Select Genre
          </option>
          <option value="fiction">Fiction</option>
          <option value="romance">Romance</option>
          <option value="fantasy">Fantasy</option>
          <option value="morality">Morality</option>
          <option value="society">Society</option>
          <option value="power">Power</option>
          <option value="justice">Justice</option>
          <option value="adventure">Adventure</option>
          <option value="tragedy">Tragedy</option>
          <option value="war">War</option>
          <option value="philosophy">Philosophy</option>
        </select>
      </nav>
    </div>
  );
}
