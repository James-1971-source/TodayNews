import { useEffect, useState } from "react";
import localFont from "next/font/local";
import styled from "styled-components";

const pastelColors = [
  '#FFB3BA', // 연한 핑크
  '#FFDFBA', // 연한 오렌지
  '#FFFFBA', // 연한 노란색
  '#BAFFC9', // 연한 민트
  '#BAE1FF', // 연한 파랑
  '#FFC3A0', // 연한 복숭아
  '#D5AAFF', // 연한 보라
  '#FFABAB', // 연한 빨강
  '#FFCCB6', // 연한 복숭아
  '#D6E4FF', // 연한 하늘색
];

const CardContainer = styled.a`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  width: calc(18% - 16px);
  position: relative;
  overflow: hidden;
  background-color: ${props => props.bgColor};
  text-decoration: none;
  color: inherit;
  transform: rotate(-2deg);
  border: 2px solid #fff;

  &:hover {
    transform: scale(1.05) rotate(-2deg);
  }
`;

const SourceDate = styled.p`
  font-size: 0.8em;
  color: blue;
  font-weight: bold;
  margin: 4px 0;
`;

function getDistinctColor(excludeColor) {
  let color;
  do {
    const randomIndex = Math.floor(Math.random() * pastelColors.length);
    color = pastelColors[randomIndex];
  } while (color === excludeColor);
  return color;
}

function Card({ title, content, author, bgColor, link }) {
  const pinColor = getDistinctColor(bgColor); // 배경색과 다른 색상 선택

  return (
    <CardContainer href={link} target="_blank" bgColor={bgColor}>
      <div className="pin" style={{ backgroundColor: pinColor, width: '10px', height: '10px', borderRadius: '50%', position: 'absolute', top: '8px', left: '8px' }}></div>
      <h2 style={{ fontSize: '1em' }}>{title}</h2>
      <p style={{ fontSize: '0.9em' }}>{content}</p>
      <SourceDate>{author}</SourceDate>
      <SourceDate>{new Date().toISOString().split('T')[0]}</SourceDate>
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyCdp6QloOHbchxdv3zJs5kk131cWTTh2O0_y3gvhe9tAkQLikCq-YhAFVz7lGlRjgzEA/exec");
      const data = await response.json();
      setArticles(data);
    };

    fetchData();
  }, []);

  const getRandomPastelColor = () => {
    const randomIndex = Math.floor(Math.random() * pastelColors.length);
    return pastelColors[randomIndex];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <div>
      <div style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/05/19/19/29/ai-generated-8773210_1280.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        margin: '0',
        width: '100vw',
        position: 'relative'
      }}>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>청소년 교육복지기관 (사)S&J희망나눔</h1>
        <p style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>우리는 청소년들이 모두 평등한 기회를 가지고 세계 속에서 마음껏 자신의 꿈을 펼칠 수 있는 세상을 꿈꿉니다.</p>
        <button>최신 청소년 뉴스</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '100vw' }}>
        {articles.map(article => (
          <Card
            key={article.번호}
            title={article["뉴스 제목"]}
            content={article["뉴스 내용"]}
            author={article["뉴스 출처"]}
            bgColor={getRandomPastelColor()}
            link={article["뉴스 기사 링크"]}
          />
        ))}
      </div>
    </div>
  );
}
