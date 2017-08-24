package com.bartech.cart.services;

import org.apache.log4j.Logger;

import com.bartech.cart.rest.conroller.ProductController;

public class ProductWorkerThread implements Runnable {
	Logger  LOG = Logger.getLogger(ProductWorkerThread.class.getName());
 private String workerName;
 
	public String getWorkerName() {
	return workerName;
}

public void setWorkerName(String workerName) {
	this.workerName = workerName;
}

	public ProductWorkerThread() {
	super();
	
}

	public ProductWorkerThread(String workerName) {
		super();
		this.workerName = workerName;
	}

	@Override
	public void run() {
		System.out.println("Worker name is" +workerName);
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		
		
		
		
	}

}
