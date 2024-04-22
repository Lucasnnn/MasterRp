package com.br.MasterRp.modules.customer.interfaces;

import com.br.MasterRp.modules.customer.entity.Customer;
import com.br.MasterRp.utils.interfaces.IGetServices;
import com.br.MasterRp.utils.interfaces.IPutServices;

public interface ICustomerService extends IGetServices<Customer>, IPutServices<Customer> {
}