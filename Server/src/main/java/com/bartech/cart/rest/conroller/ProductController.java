package com.bartech.cart.rest.conroller;

import java.util.List;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bartech.cart.exception.DeleteFailedException;
import com.bartech.cart.exception.InsertFailedException;
import com.bartech.cart.exception.RetrieveFailedException;
import com.bartech.cart.exception.UpdateFailedException;
import com.bartech.cart.models.Product;
import com.bartech.cart.rest.dto.ResponseDTO;
import com.bartech.cart.rest.dto.StatusDTO;
import com.bartech.cart.services.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {
	
	Logger  LOG = Logger.getLogger(ProductController.class.getName());
	
	@Autowired(required=true)
	@Qualifier("productService")
	private ProductService productService;
	
	@GetMapping("/{productId}")
	public Product getProducts(@PathVariable("productId") long productId){
		LOG.info("getProducts for " + productId);
		try {
			return productService.getProduct(productId);
		} catch (RetrieveFailedException e) {
			
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value="/all",method=RequestMethod.GET)
	public List<Product> allProducts(){
		LOG.info("getallProducts");
		List<Product> list = productService.getAllProducts();
		return list;
		
	}
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public Product editProduct(@RequestBody Product product){
		 try {
			product = productService.updateProduct(product);
		} catch (UpdateFailedException e) {
			
			e.printStackTrace();
		}
		return product;
		
	}
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public ResponseDTO addProduct(@RequestBody Product product){
		
		ResponseDTO response = new ResponseDTO();
	    try {
	    	product = productService.addProduct(product);
			response.setData(product);
            response.setStatus(0);
            response.setMessage("SUCCESS");
            
		} catch (InsertFailedException e) {
			
			e.printStackTrace();
			response.setData(product);
            response.setStatus(-1);
            response.setMessage("Failed: " + e);
			
		}
		return response;
	}
	
	@RequestMapping(value="/delete/{productId}",method=RequestMethod.GET)
	public StatusDTO delete(@PathVariable("productId") long productId){
		LOG.info("delete Products for " + productId);
		StatusDTO status = new StatusDTO();
		try {
			productService.deleteProduct(productId);
			status.setMessage("Product Deleted Successfully");
			status.setStatus(200);
		} catch (DeleteFailedException e) {
			e.printStackTrace();
			status.setMessage("Product Deleted Failed");
			status.setStatus(-200);
		}
		
		return status;
	}
	
}
