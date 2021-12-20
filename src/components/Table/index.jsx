import Styled from "./styles";

const Table = (props) => {
  const {
    header,
    headerStyle = {
      backgroundColor: "var(--background-blue)",
      fontSize: "12px",
      verticalAlign: "middle",
    },
    data,
    dataStyle = { verticalAlign: "middle", fontSize: "12px" },
    rowStyle = { height: "50px" },
  } = props;

  const orderById = (a, b) => {
    return parseInt(a.id) - parseInt(b.id);
  };

  return (
    <Styled>
      <table className="table">
        <thead>
          <tr style={headerStyle}>
            {header &&
              header.map((x, index) => (
                <th
                  className={`text-${x.alignment || "center"}`}
                  scope="col"
                  key={index + x.title}
                >
                  {x.title.toUpperCase()}
                </th>
              ))}
          </tr>
        </thead>
        <tbody style={{ borderTop: "none" }}>
          {data &&
            data.sort(orderById).map((row,rowindex) => (
              <tr key={row.id+rowindex} style={rowStyle}>
                {header.map((hd, index) =>
                  !hd.access ? (
                    <td
                      className={`text-${hd.alignment || "center"}`}
                      key={index + row.id + hd.title}
                      style={dataStyle}
                    >
                     <div style={{width:"100%", display: "flex", justifyContent: hd.alignment || "center"}}> {hd.cell(row)}</div>
                    </td>
                  ) : (
                    <td
                      className={`text-${hd.alignment || "center"}`}
                      key={index + row.id + hd.title}
                      style={{...dataStyle, textAlign: "center"}}
                    >
                     <div style={{width:"100%",display: "flex", justifyContent: hd.alignment || "center"}}> {row[hd.access]}</div>
                    </td>
                  )
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </Styled>
  );
};

export default Table;
