import React, {useEffect} from 'react';
import { useForm } from "../../../hooks/form";
import { service } from '../../../services';
import { appMessages } from '../../../utils/messages';
import { responseStatus } from '../../../utils/responseStatus';
import { formDataInitialState } from './util';

export const useAddCategory = ({navigationState}) => {

    const {category, isUpdate = false} = navigationState || {};

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});

    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
    
        if (isUpdate) {
          formData.id = category.id;
    
          response = await service.category.update(formData);
        } else {
            console.log(formData);
          response = await service.category.add(formData);
        }
    
        if (response?.status === responseStatus.OK) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.category.updateSuccess
              : appMessages.category.registerSuccess
          );
    
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.category.updateError
              : appMessages.category.registerError
          );
        }
      };

    const getEditData = ({
        category
      }) => {
        return {
          name: category?.name,
        }
    }

      useEffect(() => {
        if (!category?.id) return;
    
        setFormValue(
          getEditData({
            category
          })
        );
      }, [category]);

      return {
        handleSave,
        setFormValue,
        formData,
      };
}

