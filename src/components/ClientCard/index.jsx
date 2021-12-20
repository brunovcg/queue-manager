import {Section} from './styles'
import {enviromentMedia} from "../../configs/enviroment"

export const ClientCard = ({ kitchen, client, logo, alt, calls }) => {
  return (
    <Section>
      <figure>
        <img src={`${enviromentMedia}${logo}`} alt={alt} />
      </figure>
      <div className="client">{client}</div>
      <div className="kitchen"> COZINHA {`${kitchen}`}</div>
      <div className="queue">
          {calls && calls.map((item, index)=><p className="number" key={index}>{item.number}</p>)}
      </div>
    </Section>
  );
};
