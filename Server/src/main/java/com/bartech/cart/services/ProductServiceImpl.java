package com.bartech.cart.services;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bartech.cart.exception.DeleteFailedException;
import com.bartech.cart.exception.InsertFailedException;
import com.bartech.cart.exception.RetrieveFailedException;
import com.bartech.cart.exception.UpdateFailedException;
import com.bartech.cart.models.Product;
import com.bartech.cart.product.dao.ProductDAO;
import com.bartech.cart.product.dao.ProductDAOImpl;
import com.bartech.cart.rest.conroller.ProductController;

@Service("productService")
@Transactional
public class ProductServiceImpl implements ProductService {

	Logger  LOG = Logger.getLogger(ProductServiceImpl.class.getName());
	@Autowired(required=true)
	@Qualifier("productDAO")
	private ProductDAO productDAO;
	
	
	@Transactional
	public Product addProduct(Product product) throws  InsertFailedException{
				LOG.info("adding products");
		System.out.println("Product Service create invoked:");
		ExecutorService executorService = Executors.newFixedThreadPool(3);
		ProductWorkerThread worker1 = new ProductWorkerThread("object1");
		ProductWorkerThread worker2 = new ProductWorkerThread("object2");
		ProductWorkerThread worker3 = new ProductWorkerThread("object3");
//		ProductWorkerThread worker4 = new ProductWorkerThread("object4");
//		ProductWorkerThread worker5 = new ProductWorkerThread("object5");
//		ProductWorkerThread worker6 = new ProductWorkerThread("object6");
//		ProductWorkerThread worker7 = new ProductWorkerThread("object7");
		executorService.execute(worker1);
		executorService.execute(worker2);
		executorService.execute(worker3);
//		executorService.execute(worker4);
//		executorService.execute(worker5);
//		executorService.execute(worker6);
//		executorService.execute(worker7);
		product = productDAO.addProduct(product);
		
		LOG.error("Product added");
		return product;
	}
	@Transactional
	public Product updateProduct(Product product) throws UpdateFailedException{
		LOG.info("updating products");
		System.out.println("Product Service Update invoked:");
		product = productDAO.updateProduct(product);
		LOG.debug(" Product updated");
		return product;
		
	}

	public Product getProduct(long productId) throws RetrieveFailedException {
		LOG.info("getProducts for " + productId);
		try
		{
			Product mrkt = productDAO.getProduct(productId);
			LOG.info("Received product details..." + mrkt.getName());
			return mrkt;
		}
		catch(Exception ex)
		{
			LOG.info("Received product details exception..." ,ex);			
		}
		return null;
	}

	public List<Product> getAllProducts() {
		return productDAO.getProducts();
	}
	@Transactional
	public boolean deleteProduct(long productId) throws DeleteFailedException {
		LOG.info("Deleting Marketer with " + productId);
		try {
			productDAO.deleteProduct(productId);
		} catch (RetrieveFailedException e) {
			
			e.printStackTrace();
		}
		return false;
	}


}




