import Image from "next/image";
import localFont from "next/font/local";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s;
  width: 30%;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

const Category = styled.span`
  display: inline-block;
  background-color: #0070f3;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

function Card({ title, content, author, category, imageUrl }) {
  return (
    <CardContainer>
      <Category>{category}</Category>
      <Image src={imageUrl} alt={title} width={300} height={200} style={{ borderRadius: '8px' }} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p>— {author}</p>
    </CardContainer>
  );
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <div style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/05/19/19/29/ai-generated-8773210_1280.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // 원하는 높이 설정
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // 글씨 색상 변경 (예: 흰색)
        textAlign: 'center',
        padding: '20px',
        margin: '0', // 좌우 여백 제거
        width: '100vw', // 전체 너비 설정
        position: 'relative' // 위치 설정
      }}>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>청소년 교육복지기관 (사)S&J희망나눔</h1>
        <p style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>우리는 청소년들이 모두 평등한 기회를 가지고 세계 속에서 마음껏 자신의 꿈을 펼칠 수 있는 세상을 꿈꿉니다.</p>
        <button>Start exploring</button>
      </div>
      <h2>Our featured blogs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card title="Card 1" content="Some content here..." author="Author 1" category="Category 1" />
        <Card title="Card 2" content="Some content here..." author="Author 2" category="Category 2" />
        <Card title="Card 3" content="Some content here..." author="Author 3" category="Category 3" />
        <Card title="Card 4" content="Some content here..." author="Author 4" category="Category 4" />
        <Card title="Card 5" content="Some content here..." author="Author 5" category="Category 5" />
        <Card title="Card 6" content="Some content here..." author="Author 6" category="Category 6" />
      </div>
    </div>
  );
}
