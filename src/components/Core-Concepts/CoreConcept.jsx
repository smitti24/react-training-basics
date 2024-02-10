import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 4rem;
  width: 6rem;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
`;

const Body = styled.p`
  font-size: 0.9rem;
`;

export const CoreConcept = ({ image, title, description }) => {
  return (
    <>
      <Container>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Body>{description}</Body>
      </Container>
    </>
  );
};
