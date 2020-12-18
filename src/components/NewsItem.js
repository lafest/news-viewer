import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block; // 이 요소를 block으로(자동줄바꿈되도록, inline의 반대) 취급.
      // inline: 너비/높이 설정불가. inline-block: 너비/높이 설정 가능한 inline요소
      width: 160px;
      height: 160px;
      object-fit: cover; // 가로세로 비율 유지하면서 채우기. 채웠는데 안맞는 부분 있으면 잘려나감
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5; // 줄간격 px
      margin-top: 0.5rem;
      white-space: normal; // 기본값이 normal
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};
