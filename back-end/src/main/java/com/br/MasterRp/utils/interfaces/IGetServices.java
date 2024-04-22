package com.br.MasterRp.utils.interfaces;

import java.util.List;

public interface IGetServices<T> {
    List<T> getAll();

    T getById(Long id);
}