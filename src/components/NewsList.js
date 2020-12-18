import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NewsItem } from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box; // border-box는 width에 border, padding을 포함. content-box는 오로지 content만을 width로 취급
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    // 미디어 쿼리. 컴퓨터 화면 또는 스마트 기기 화면 이면서 max-width가 768인 경우를 타겟팅(width가 768보다 작을 경우를 타겟팅)
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>Loading . . .</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
