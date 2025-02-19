import { Link, Outlet, useSearchParams } from "react-router-dom";
import Navbar from "@components/Navbar";
import { Container, Wrapper } from "@styles/HomeStyles";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectLang = searchParams.get("lang") || "";

  const handleLanguageSelect = (lang: string) => {
    setSearchParams({ lang });
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <h1>Study App</h1>
        <p>Select a language:</p>
        <ul>
          <li>
            <button onClick={() => handleLanguageSelect("en")}>영어 (English)</button>
          </li>
          <li>
            <button onClick={() => handleLanguageSelect("jp")}>일본어 (Japanese)</button>
          </li>
          <li>
            <button onClick={() => handleLanguageSelect("cn")}>중국어 (Chinese)</button>
          </li>
        </ul>
        
        {selectLang && (
          <>
            <p>Select a study mode:</p>
            <ul>
              <li>
                <Link to={`/word?lang=${selectLang}`}>단어쓰기 (Word Memorization)</Link>
              </li>
              <li>
                <Link to={`/speak?lang=${selectLang}`}>말하기 (Pronunciation Check)</Link>
              </li>
              <li>
                <Link to={`/conversation?lang=${selectLang}`}>회화 (Conversation)</Link>
              </li>
            </ul>
          </>
        )}
      </Container>
      <Outlet />
    </Wrapper>
  );
}
