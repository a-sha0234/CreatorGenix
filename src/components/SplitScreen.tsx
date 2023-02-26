import styled from "styled-components";

interface Iprops {
  children: any;
  leftWeight: number;
  rightWeight: number;
}

interface IPaneProps {
  weight: number;
}

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Pane = styled.div<IPaneProps>`
  flex: ${(props: any) => props.weight};
`;

const SplitScreen: React.FC<Iprops> = ({
  children,
  leftWeight,
  rightWeight,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
