import React, {useEffect, useState} from 'react';
import { useForm } from "../../../../hooks/form";
import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import { formDataInitialState, getPreparedFormData } from './util';
import {toast} from "react-toastify";

export const useAddSubcategory = ({navigationState}) => {

    const {subcategory, isUpdate = false} = navigationState || {};
    const { navigate, navigateGoBack } = useApp();

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});
    const [categoryData, setCategoryData] = useState([]);

    const getCategoryData = async()  => {
    
      const response = await service.category.getAll();

      if (response?.status === responseStatus.OK) {
        setCategoryData(response?.data);
      } else {
        setCategoryData([]);
      }

    }
  
    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
        const data = getPreparedFormData(formData);

    
        if (isUpdate) {
          data.id = subcategory.id;
    
          response = await service.subcategory.update(data);
        } else {
            console.log(data);
          response = await service.subcategory.add(data);
        }
    
        if (response?.status === responseStatus.OK) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.subcategory.updateSuccess
              : appMessages.subcategory.registerSuccess
          );
    
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.subcategory.updateError
              : appMessages.subcategory.registerError
          );
        }
      };

    const getEditData = ({
        subcategory
      }) => {
        return {
          name: subcategory?.name,
        }
    }

      useEffect(() => {
        if (!subcategory?.id) return;
    
        setFormValue(
          getEditData({
            subcategory
          })
        );
      }, [subcategory]);

      useEffect(() => {
        getCategoryData();
      }, []);

      return {
        categoryData,
        handleSave,
        setFormValue,
        navigateGoBack,
        formData,
      };
}

