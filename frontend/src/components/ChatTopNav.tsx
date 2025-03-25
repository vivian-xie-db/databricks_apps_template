import React from 'react';
import styled from 'styled-components';
import UserMenu from './UserMenu';

const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

const ChatTopNav: React.FC = () => {
  return (
    <TopNav>
      <UserMenu />
    </TopNav>
  );
};

export default ChatTopNav; 