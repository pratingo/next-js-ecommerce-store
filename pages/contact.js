import { css } from '@emotion/react';
import Main from '../components/Main';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  * {
    border-radius: 5px;
  }
`;

export default function Contact() {
  return (
    <Main>
      <h2>Contact us:</h2>
      <form css={formStyle}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <label htmlFor="message">Message:</label>{' '}
        <textarea id="message" rows="10" cols="30" />
        <button>Send request</button>
      </form>
    </Main>
  );
}
