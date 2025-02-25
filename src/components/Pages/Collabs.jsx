import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <StyledWrapper>
      <div className="flex items-center justify-center my-[13.49rem]">
        <div className="cards">
          <div
            className="card red"
            onClick={() => handleCardClick('/futurecollabs')}
          >
            <p className="tip">Future Rides</p>
            <p className="second-text"></p>
          </div>
          <div
            className="card blue"
            onClick={() => handleCardClick('/pastcollabs')}
          >
            <p className="tip">Past Rides</p>
            <p className="second-text"></p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 120px;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: transform 400ms, filter 400ms;
  }

  .card.red {
    background-color: #f43f5e;
  }

  .card.blue {
    background-color: #3b82f6;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(2px);
    transform: scale(0.9);
  }

  .card p.tip {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .card p.second-text {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .cards {
      gap: 10px;
    }
    .card {
      height: 100px;
      width: 90%;
    }
    .card p.tip {
      font-size: 1rem;
    }
    .card p.second-text {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      height: 80px;
    }
    .card p.tip {
      font-size: 0.9rem;
    }
    .card p.second-text {
      font-size: 0.7rem;
    }
  }
`;

export default Card;
