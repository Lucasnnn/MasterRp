package com.br.MasterRp.modules.customer;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.MasterRp.modules.customer.entity.dto.CustomerBasicDTO;
import com.br.MasterRp.modules.customer.interfaces.ICustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final ICustomerService iCustomerService;

    public CustomerController(ICustomerService iCustomerService) {
        this.iCustomerService = iCustomerService;
    }

    @PostMapping()
    public ResponseEntity<CustomerBasicDTO> create(@RequestBody CustomerBasicDTO customer) {
        customer = new CustomerBasicDTO(iCustomerService.create(customer.model()));

        return new ResponseEntity<CustomerBasicDTO>(customer, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<CustomerBasicDTO>> getAll() {
        List<CustomerBasicDTO> customers = CustomerBasicDTO.fromList(iCustomerService.getAll());

        return new ResponseEntity<List<CustomerBasicDTO>>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerBasicDTO> getById(@PathVariable("id") Long id) {
        CustomerBasicDTO customer = new CustomerBasicDTO(iCustomerService.getById(id));

        return new ResponseEntity<CustomerBasicDTO>(customer, HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<CustomerBasicDTO> update(@RequestBody CustomerBasicDTO customer) {
        iCustomerService.update(customer.model());

        return new ResponseEntity<CustomerBasicDTO>(customer, HttpStatus.OK);
    }
}
