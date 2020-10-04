import styled from 'styled-components'

const ReferenceCard = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

  .card__icon {
    margin-right: 16px;
  }

  .card__content {
    .card__title {
      margin-bottom: 4px;
    }

    a {
      font-size: 14px;
    }
  }
`

export default ReferenceCard
