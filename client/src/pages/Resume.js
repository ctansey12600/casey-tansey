import * as React from "react";
import styled from "styled-components";
import resumePdf from "../assets/resume.pdf";

function Resume() {
  return (
    <Wrapper>
      <iframe
        src={resumePdf}
        title="Tansey_Resume"
        width="100%"
        height="100%"
      ></iframe>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 46px 0px 80px;
  gap: 45px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  iframe {
    width: 927px;
    height: 1200px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export default Resume;
