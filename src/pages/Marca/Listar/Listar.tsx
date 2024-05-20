import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../../../components/Tables/MarcaTable';
import DefaultLayout from '../../../layout/DefaultLayout';

const ListMarca = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Marca" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ListMarca;
