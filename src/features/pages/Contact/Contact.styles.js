import styled from 'styled-components';
import { Form } from 'formik';

export const Layout = styled.div`
  padding: 0;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleH1 = styled.h1`
  font-weight: 600;
  font-size: 2em;
  margin-bottom: 16px;
  padding: 0 16px;
`;
export const Hr = styled.hr`
  background-color: #c2c2c2;
  height: 1px;
  margin: 40px 0;
  width: 100%;
  border: 0;
  opacity: 0.25;
`;
export const Content = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
export const DivContact = styled.div`
  background-color: white;
  width: calc(100% * 2 / 3);
  padding: 0;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const ContactHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Left = styled.div`
  width: 75%;
  padding: 0 16px;
`;
export const TagP = styled.p`
  font-size: 16px;
  margin-bottom: 16px;

  ${({ contactHighlight }) =>
    contactHighlight &&
    ` font-size: 14px;
            font-weight: 600;
            display: inline-block;       
            padding: 0 10px;
            background-color: #ffef95;`}
`;
export const Span = styled.span`
  font-weight: 500;
`;
export const Right = styled.div`
  padding: 0 16px;
`;
export const Image = styled.img`
  width: 90px;
  border-radius: 50% 50%;
  object-fit: cover;
`;
export const ContactForm = styled.div``;
export const LayOutForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  margin: 32px 0;
  width: 100%;
`;
export const FormInput = styled.div`
  padding: 0 16px;
  width: 50%;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const FormTextArea = styled.div`
  padding: 0 16px;
  width: 100%;
`;
export const FormButton = styled.div`
  padding: 0 16px;
  width: 100%;
`;
export const ContactNote = styled.div`
  width: calc(100% * 1 / 3);
  padding: 0 16px;
  background-color: white;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Note = styled.div`
  padding: 32px;
  background-color: #fafafa;
`;
export const TagUl = styled.ul`
  margin-left: 0;
  padding-left: 16px;
`;
export const TagLi = styled.li`
  font-size: 14px;
  color: $color-text-link;
  margin-bottom: 8px;
`;
export const CustomDiv = styled.div`
  padding: 0 16px;
`;
