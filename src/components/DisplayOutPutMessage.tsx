import { Container, Message } from "semantic-ui-react";

type Props = {
  messages: Array<string> | undefined;
};

const DisplayOutPutMessage = ({ messages }: Props): JSX.Element => {
  return (
    <Message data-testid="outputmessage">
      {messages?.map((message, i) => {
        return <p key={i}>{message}</p>;
      })}
    </Message>
  );
};

export default DisplayOutPutMessage;
