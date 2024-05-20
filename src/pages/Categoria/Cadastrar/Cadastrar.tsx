import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import CheckboxFive from '../../../components/Checkboxes/CheckboxFive';
import CheckboxFour from '../../../components/Checkboxes/CheckboxFour';
import CheckboxOne from '../../../components/Checkboxes/CheckboxOne';
import CheckboxThree from '../../../components/Checkboxes/CheckboxThree';
import CheckboxTwo from '../../../components/Checkboxes/CheckboxTwo';
import SwitcherFour from '../../../components/Switchers/SwitcherFour';
import SwitcherOne from '../../../components/Switchers/SwitcherOne';
import SwitcherThree from '../../../components/Switchers/SwitcherThree';
import SwitcherTwo from '../../../components/Switchers/SwitcherTwo';
import DefaultLayout from '../../../layout/DefaultLayout';
import DatePickerOne from '../../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../../components/Forms/DatePicker/DatePickerTwo';
import SelectGroupTwo from '../../../components/Forms/SelectGroup/SelectGroupTwo';
import MultiSelect from '../../../components/Forms/MultiSelect';

const AddCategoria = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lojas" />

      <div className="grid grid-cols-1 gap-9 ">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Cadastrar Loja
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Nº Telefone
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Descrição
                  </label>
                  <textarea
                    rows={6}
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

              <div className="w-full flex justify-center">
                <button className="flex w-1/3 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Confirmar
                </button>
              </div>
                
             
            </div>
          </div>

          
      </div>
      </div>
    </DefaultLayout>
  );
};

export default AddCategoria;
