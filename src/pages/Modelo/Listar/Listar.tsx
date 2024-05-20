import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../../../components/Tables/ModeloTable';
import DefaultLayout from '../../../layout/DefaultLayout';

const ListModelo = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Modelos" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ListModelo;
