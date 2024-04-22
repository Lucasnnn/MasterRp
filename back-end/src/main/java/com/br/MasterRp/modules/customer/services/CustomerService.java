package com.br.MasterRp.modules.customer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.MasterRp.modules.customer.CustomerRepository;
import com.br.MasterRp.modules.customer.entity.Customer;
import com.br.MasterRp.modules.customer.interfaces.ICustomerService;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Customer> updateAll(List<Customer> entitys) {
        return customerRepository.saveAll(entitys);
    }

    @Override
    public Customer update(Customer entity) {
        return customerRepository.save(entity);
    }

    @Override
    public Customer save(Customer entity) {
        return customerRepository.save(entity);
    }
}
