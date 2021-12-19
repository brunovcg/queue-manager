import styled from "styled-components";
import mobileBreakpoint from "../../../../configs/mobileBreakpoint";

export const Styled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  .message-container {
    width: 90%;

    .title-message {
      font-family: "Otomanopee One", sans-serif;
      color: var(--dark-grey);
    }

    .message-list {
      font-family: "Otomanopee One", sans-serif;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: start;

      @media (max-width: ${`${mobileBreakpoint.width}px`}) {
        justify-content: center;
      }

      .message-card {
        margin: 10px;
        .title-author-date-priority {
          display: flex;
          flex-wrap: wrap;
          font-size: 12px;

          .spanTitle {
            font-weight: bold;
            color: var(--dark-grey);
          }

          .title {
            width: 35%;
            margin-right: 30px;
          }

          .author,
          .date {
            padding-right: 30px;
          }

          .priority {
          }
        }

        .message-button {
          margin-top: 10px;
          display: flex;
          width: 100%;

          .message {
            flex: 1 auto;
            font-family: "Otomanopee One", sans-serif;
            background-color: white !important;
            min-height: 80px;
            padding: 5px;
          }

          .button-box {
            width: 40px;
            margin-right: 20px;
          }
        }
      }
    }
  }
`;

export const MessageCard = styled.div`
  width: 45%;
  margin: 15px 0;
  padding: 20px 15px;
  background-color: ${(props) =>
    props.priority === "Alta"
      ? "var(--light-red)"
      : props.priority === "Média"
      ? "var(--light-orange)"
      : "var(--light-green)"};

  border: 2px solid
    ${(props) =>
      props.priority === "Alta"
        ? "var(--light-red)"
        : props.priority === "Média"
        ? "var(--light-orange)"
        : "var(--light-green)"};
  border-radius: 8px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: ${`${mobileBreakpoint.width}px`}) {
    width: 100%;
  }
`;
