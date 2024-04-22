package com.br.MasterRp.utils.interfaces;

public interface IDeleteServices<T> {
    boolean deleteAll(T[] ids);

    boolean deleteById(Long id);
}