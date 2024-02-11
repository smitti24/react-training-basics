import styled from "styled-components";
import { CenterText, H2 } from "../../styles/shared";
import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS as coreConceptsData } from "../../../data";

const Container = styled.section`
  padding: 2rem;
  border-radius: 6px;
  background-color: #140524;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  width: 10rem;
  text-align: center;
`;

export default function CoreConcepts() {
  const concepts = coreConceptsData;

  return (
    <>
      <section id="core-concepts">
        <Container>
          <CenterText>
            <H2>Core Concepts</H2>
          </CenterText>
          <UnorderedList>
            {concepts.map((concept) => (
              <ListItem key={concept.title}>
                <CoreConcept {...concept}></CoreConcept>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      </section>
    </>
  );
}
