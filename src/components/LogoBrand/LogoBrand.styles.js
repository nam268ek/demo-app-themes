import styled from "styled-components";

export const Brand = styled.div`
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;
export const ListLogo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  filter: grayscale(1);
  padding-left: 0;
  &:hover {
    filter: grayscale(0);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 14px;
    column-gap: 14px;
    justify-content: center;
  }

  @media (max-width: 375px) {
    column-gap: 1em;
    row-gap: 1em;
  }
`;
export const ListLogoItem = styled.li`
  list-style-type: none;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 96px;
  max-height: 96px;
  display: block;
  object-fit: contain;
`;
