import React, {useEffect} from 'react';
import { useForm } from "../../../../hooks/form";
import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import { formDataInitialState } from './util';
import {toast} from "react-toastify";

export const useAddBrand = ({navigationState}) => {

    const {brand, isUpdate = false} = navigationState || {};
    const { navigate, navigateGoBack } = useApp();

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});

    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
    
        if (isUpdate) {
          formData.id = brand.id;
    
          response = await service.brand.update(formData);
        } else {
            console.log(formData);
          response = await service.brand.add(formData);
        }
    
        if (response?.status === responseStatus.OK) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.brand.updateSuccess
              : appMessages.brand.registerSuccess
          );
    
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.brand.updateError
              : appMessages.brand.registerError
          );
        }
      };

    const getEditData = ({
        brand
      }) => {
        return {
          name: brand?.name,
        }
    }

      useEffect(() => {
        if (!brand?.id) return;
    
        setFormValue(
          getEditData({
            brand
          })
        );
      }, [brand]);

      return {
        handleSave,
        setFormValue,
        navigateGoBack,
        formData,
      };
}

