package com.bartech.cart.product.dao;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.bartech.cart.exception.DeleteFailedException;
import com.bartech.cart.exception.InsertFailedException;
import com.bartech.cart.exception.RetrieveFailedException;
import com.bartech.cart.exception.UpdateFailedException;
import com.bartech.cart.models.Product;
import com.bartech.cart.rest.conroller.ProductController;

@Repository("productDAO")
@Transactional
public class ProductDAOImpl implements ProductDAO{
	
	Logger  LOG = Logger.getLogger(ProductDAOImpl.class.getName());
	@PersistenceContext
	public EntityManager entityManager;

	@Transactional(readOnly=false)
	public Product addProduct(Product product) throws InsertFailedException
	{
		LOG.info("Adding Products");
		try{
			entityManager.persist(product);
		}catch(Exception e){
			
			StringWriter stack = new StringWriter();
			e.printStackTrace(new PrintWriter(stack));			
			LOG.error("Exception" +stack );
			throw new InsertFailedException("Failed to insert Product"+ e);
		}
		finally{
		}
		return product;		
	}

	@Transactional(readOnly=false)
	public Product updateProduct(Product product) throws UpdateFailedException 
	{
		LOG.info("updating Marketers");
		try{
			entityManager.merge(product);
		}catch(Exception e){
			LOG.error("Exception" +e);
			throw new UpdateFailedException("Failed to Update product"+ e);
		}
		finally{
		}
		return product;
	}

	@Transactional(readOnly=false)
	public void deleteProduct(long productId) throws DeleteFailedException, RetrieveFailedException
	{
		LOG.info("Deleting Products");
		Product cusomer;
		
			cusomer = getProduct(productId);
		
		try{
			entityManager.remove(cusomer);
		}catch(Exception e){
			LOG.error("Exception" +e);
			throw new DeleteFailedException("Failed to Delete Product"+ e);
			
		}
		
		LOG.info("Product Deleted");
	}

	@Transactional(readOnly=true)
	public Product getProduct(long productId) throws RetrieveFailedException
	{
		String sql = "select product from Product product where product.id="+productId;
		try{
			return (Product) entityManager.createQuery(sql).getSingleResult();
		}catch(Exception e){
			LOG.error(e.getStackTrace().toString());
			LOG.error("Exception", e);
			throw new RetrieveFailedException("Failed to Retrieve Product"+ e);
		}
	}

	@Transactional(readOnly=true)
	public List<Product> getProducts() {
		LOG.info("Getting Products");
		return entityManager.createQuery("select product from Product product").getResultList();
	}

}
