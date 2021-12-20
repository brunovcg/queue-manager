import Table from "../../../../../components/Table";


const OneUsersTable = ({data}) => {
 
 
  
    const header = [
      {
        title: "ID",
        access: "id",
      },
      {
        title: "Usuário",
        access: "username",
        alignment: "start",
      },
      {
        title: "E-mail",
        access: "email",
        alignment: "start",
      },
      {
        title: "Doc",
        access: "legal_id",
      },
      {
        title: "Tipo",
        access: false,
        cell: (row) =>
          row.is_superuser === true
            ? "Superuser"
            : row.is_staff === true
            ? "Staff"
            : "User",
        alignment: "start",
      }
    ];
  
    return (
      <div>
        <Table header={header} data={data} />
      </div>
    );
  };
  
  export default OneUsersTable;
  