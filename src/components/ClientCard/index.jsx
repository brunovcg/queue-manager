import {Section} from './styles'

export const ClientCard = ({ kitchen, client, logo, alt, calls }) => {
  return (
    <Section>
      <figure>
        <img src={logo} alt={alt} />
      </figure>
      <div className="client">{client}</div>
      <div className="kitchen"> COZINHA {`${kitchen}`}</div>
      <div className="queue">
          {calls && calls.slice(-7).map((item, index)=><p key={index}>{item}</p>)}
      </div>
    </Section>
  );
};
