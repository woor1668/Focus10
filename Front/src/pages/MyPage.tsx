import Navbar from '@components/Navbar';
import { Container, Wrapper } from '@styles/HomeStyles';
import MyApi from '@src/components/MyApi';
import MyRecords from '@src/components/MyRecords';

export default function MyPage() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <h2>My Page</h2>
        <MyApi title="OpenAI API" />
        <MyApi title="Gemini API" />
        <MyApi title="Claude API" />
        <MyRecords />
      </Container>
    </Wrapper>
  );
}
