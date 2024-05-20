import React, {useEffect, useState} from 'react';
import { useForm } from "../../../../hooks/form";
import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import { formDataInitialState, getPreparedFormData, getUserPreparedFormData } from './util';
import {toast} from "react-toastify";

export const useAddStore = ({navigationState}) => {

    const {store, isUpdate = false} = navigationState || {};
    const { navigate, navigateGoBack } = useApp();

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});
  
    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
        const data = getPreparedFormData(formData);
        const userData = getUserPreparedFormData(formData);

    
        if (isUpdate) {
          data.id = store.id;
    
          response = await service.store.update(data);
        } else {

          userData.role = "Dono";
          response = await service.user.add(userData);



          data.userID = response.data.id;
          
          data.customization = "";
          response = await service.store.add(data);
        }
    
        if (response?.status === responseStatus.CREATED) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.store.updateSuccess
              : appMessages.store.registerSuccess
          );
    
          window.open(`http://localhost:5173/store/${response.data.sid}`)
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.store.updateError
              : appMessages.store.registerError
          );
        }
      };

    const getEditData = ({
        store
      }) => {
        return {
          name: store?.name,
        }
    }

      useEffect(() => {
        if (!store?.id) return;
    
        setFormValue(
          getEditData({
            store
          })
        );
      }, [store]);


      return {
        handleSave,
        setFormValue,
        navigateGoBack,
        formData,
      };
}

