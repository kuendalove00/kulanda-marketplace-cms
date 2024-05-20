import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../../../components/Tables/SubcategoryTable';
import DefaultLayout from '../../../layout/DefaultLayout';

const ListSubcategoria = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categorias" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ListSubcategoria;
