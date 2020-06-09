import React from 'react';
import { Message, ErrorMessageContainer } from './ErrorMessageStyled';

type ErrorMessage = {
  text?: string;
};

export const ErrorMessage: React.FC<ErrorMessage> = ({ text }) => {
  return (
    <ErrorMessageContainer>
      <Message>{text}</Message>
    </ErrorMessageContainer>
  );
};

ErrorMessage.defaultProps = {
  text: 'Something went wrong...',
};
