package com.bartech.cart.services;

import java.util.Date;
import java.util.List;

import com.bartech.cart.exception.DeleteFailedException;
import com.bartech.cart.exception.InsertFailedException;
import com.bartech.cart.exception.RetrieveFailedException;
import com.bartech.cart.exception.UpdateFailedException;
import com.bartech.cart.models.Product;

public interface ProductService {
	
	public Product addProduct(Product product) throws InsertFailedException;
	public Product updateProduct(Product product) throws UpdateFailedException;
	public Product getProduct(long productId) throws RetrieveFailedException;
	public List<Product> getAllProducts();
	public  boolean deleteProduct(long productId) throws DeleteFailedException;
}
