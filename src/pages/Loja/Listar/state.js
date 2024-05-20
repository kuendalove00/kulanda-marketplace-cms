import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import React, {useState, useEffect} from 'react';
import {toast} from "react-toastify";


export const useListStore = () => {
    const { AppRouteName, navigate, navigateGoBack } = useApp();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
    const [totalData, setTotalData] = useState(null);

    const getInitialData = async () => {
        setIsLoading(true);
        const response = await service.store.getAll();
        setIsLoading(false);
    
        if (response?.status === responseStatus.OK) {
          setData(response?.data);
          setTotalData(response?.data?.length);
        } else {
          setData([]);
          setTotalData(0);
        }
      };
    
      const handleDelete = async () => {
        setIsLoading(true);
    
        const response = await service.store.remove(deleteItem?.id);
    
        if (response?.status === responseStatus.OK) {
          toast.success(`Categoria ${deleteItem?.name} removido com sucesso!`);
          getInitialData();
        } else {
          toast.error(
            `Falha ao remover a categoria ${deleteItem?.name}, tente novamente mais tarde!`
          );
        }
    
        setIsLoading(false);
      };
    
      const handleUpdate = (store) => {
        navigate(AppRouteName.store.edit, {
          state: { store, isUpdate: true },
        });
      };

      useEffect(() => {
        getInitialData();
      }, []);
    
      useEffect(() => {
        if (deleteItem?.id) handleDelete();
      }, [deleteItem]);

      

      return {
        data,
        deleteItem,
        setDeleteItem,
        isLoading,
        totalData,
        AppRouteName,
        handleUpdate,
        handleDelete,
        navigate,
        navigateGoBack,
      };
}
