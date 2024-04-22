package com.br.MasterRp.modules.customer.entity.dto;

import java.util.ArrayList;
import java.util.List;

import com.br.MasterRp.core.exceptions.CustomException;
import com.br.MasterRp.modules.customer.entity.Customer;

public class CustomerBasicDTO {
    private Long id;
    private String email;
    private String name;
    private String telephone;

    // Construtor
    public CustomerBasicDTO(Customer customer) {
        if (customer == null) {
            throw new CustomException("Not found customer !");
        }

        this.id = customer.getId();
        this.email = customer.getEmail();
        this.name = customer.getName();
        this.telephone = customer.getTelephone();
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getTelephone() {
        return telephone;
    }

    public static List<CustomerBasicDTO> fromList(List<Customer> customers) {
        List<CustomerBasicDTO> dtos = new ArrayList<>();

        for (Customer customer : customers) {
            dtos.add(new CustomerBasicDTO(customer));
        }

        return dtos;
    }

    public Customer model() {
        Customer customer = new Customer();
        customer.setId(this.id);
        customer.setName(this.name);
        customer.setEmail(this.email);
        customer.setTelephone(this.telephone);

        return customer;
    }
}