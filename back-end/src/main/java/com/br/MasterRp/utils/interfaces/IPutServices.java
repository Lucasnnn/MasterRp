package com.br.MasterRp.utils.interfaces;

import java.util.List;

public interface IPutServices<T> {
    List<T> updateAll(List<T> entitys);

    T update(T entity);

    T create(T entity);
}