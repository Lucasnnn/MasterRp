package com.br.MasterRp.repositories;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.br.MasterRp.modules.customer.CustomerRepository;
import com.br.MasterRp.modules.customer.entity.Customer;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
class CustomerRepositoryTest {

    @Autowired
    CustomerRepository customerRepository;

    @Test
    @DisplayName("Should get Customer successfully from DB")
    void saveCustomer() {
        Customer result = this.createMockCustomer();

        assertThat(result.getId()).isNotNull();
    }

    @Test
    @DisplayName("Should not get Customer from DB when customer not exists")
    void findCustomerByIdNullCase() {
        Long id = Long.valueOf(0);

        Optional<Customer> result = this.customerRepository.findById(id);

        assertThat(result.isEmpty()).isTrue();
    }

    @Test
    @DisplayName("Should get Customer successfully from DB")
    void findCustomerByIdExistCase() {
        Customer customer = this.createMockCustomer();

        Optional<Customer> result = this.customerRepository.findById(customer.getId());

        assertThat(result.isPresent()).isTrue();
    }

    @Test
    @DisplayName("Should create and save all MockCustomers successfully")
    void saveAllCustomers() {
        List<Customer> mockCustomers = this.createMockCustomers();

        assertThat(mockCustomers).isNotEmpty();
    }

    @Test
    @DisplayName("Should find all Customers successfully")
    void findAllCustomers() {
        List<Customer> mockCustomers = this.createMockCustomers();

        List<Customer> savedCustomers = this.customerRepository.findAll();

        assertThat(savedCustomers).containsAll(mockCustomers);
    }

    private Customer createMockCustomer() {
        Customer customer = new Customer();
        customer.setTelephone("4002-8922");
        customer.setEmail("oteste58@gmail.com");
        customer.setName("Carlos Albeto Testando");

        return this.customerRepository.save(customer);
    }

    private List<Customer> createMockCustomers() {
        List<Customer> customers = new ArrayList<Customer>();

        Customer carlos = new Customer();
        carlos.setTelephone("4002-8922");
        carlos.setEmail("oteste58@gmail.com");
        carlos.setName("Carlos Albeto Testando");
        customers.add(carlos);

        Customer jessica = new Customer();
        jessica.setTelephone("4002-8921");
        jessica.setEmail("teste-jessica@gmail.com");
        jessica.setName("Jessica Teste Silva");
        customers.add(jessica);

        Customer breno = new Customer();
        breno.setTelephone("4002-8900");
        breno.setEmail("brenocheck@gmail.com");
        breno.setName("Breno Oliveira Check");
        customers.add(breno);

        return this.customerRepository.saveAll(customers);
    }
}