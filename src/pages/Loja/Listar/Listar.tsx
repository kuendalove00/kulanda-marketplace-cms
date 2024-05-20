import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../../../components/Tables/StoreTable';
import DefaultLayout from '../../../layout/DefaultLayout';

const ListLoja = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lojas" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ListLoja;
