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
`;

const Pane = styled.div<IPaneProps>`
  flex: ${(props: any) => props.weight};
`;

const SplitScreen: React.FC<Iprops> = ({
  children,
  leftWeight,
  rightWeight,
}) => {
  console.log(children);
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
