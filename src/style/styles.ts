import styled from "styled-components";

interface gridProps {
  gridArea: string;
}

const Input = styled.input<gridProps>`
  grid-area: ${(props: any) => props.gridArea};
  border-radius: 8px;
  border: none;
  font-size: 1.2rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const SubHeading = styled.h2`
  color: white;
`;

const TextArea = styled.textarea<gridProps>`
  grid-area: ${(props: any) => props.gridArea};
  border-radius: 8px;
  font-size: 1rem;
`;

const Section = styled.div`
  background-color: grey;
  max-width: 70%;
  margin-left: 4%;
  border-radius: 10px;
`;

const Button = styled.button`
  margin: 4%;
`;

const SkillDelete = styled.button`
  margin: 1%;
`;

export { Input, Heading, SubHeading, TextArea, Section, Button, SkillDelete };
