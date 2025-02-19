import Navbar from '@components/Navbar';
import { Container, Wrapper } from '@styles/HomeStyles';
import MyApi from '@components/MyApi';
import MyRecords from '@components/MyRecords';
import { useState } from 'react';

export default function MyPage() {
  const [activeApi, setActiveApi] = useState("");
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <h2>My Page</h2>
        <MyApi title="OpenAI" activeApi={activeApi} setActiveApi={setActiveApi} />
        <MyApi title="Gemini" activeApi={activeApi} setActiveApi={setActiveApi} />
        <MyApi title="Claude" activeApi={activeApi} setActiveApi={setActiveApi} />
        <MyRecords />
      </Container>
    </Wrapper>
  );
}
