import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.bartech.cart.exception.DeleteFailedException;
import com.bartech.cart.exception.InsertFailedException;
import com.bartech.cart.exception.RetrieveFailedException;
import com.bartech.cart.models.Product;
import com.bartech.cart.product.dao.ProductDAOImpl;
import com.bartech.cart.services.ProductService;
import com.bartech.cart.services.ProductServiceImpl;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:applicationContext-jdbc.xml" })
public class ProductTest {

	@Autowired(required = true)
	@Qualifier("productService")
	ProductService dataServices;

	

	@Test
	// @Transactional
	// @Rollback(true)
	public void insertProducttest() {
		Product m = new Product();

		m.setManufacturer("Iphone");
		m.setName("7plus");
		m.setDescription("Saikrishna");
		m.setCreatedBy("Bartech");

		try {
			Product mrktr = dataServices.addProduct(m);
			assertFalse(mrktr == null);
		} catch (InsertFailedException e) {

			e.printStackTrace();
			assertFalse(true);
		} catch (Exception e) {

			e.printStackTrace();
			assertFalse(false);
		}

	}

//	@Test
//	public void updateMarketertest() {
//		System.out.println("dataServices:" + dataServices);
//		try {
//			Product m = dataServices.getMarketer(17);
//			m.setName("Walmart.com");
//			dataServices.updateMarketer(m);
//			assertFalse(m != null);
//			System.out.println(m);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	public void deleteMarketertest() {
//		try {
//			boolean m;
//			m=dataServices.deleteMarketer(125);
//			assertFalse(m);
//		} catch (DeleteFailedException e) {
//
//			e.printStackTrace();
//		}
//	}
//	
//	@Test
//	public void retrieveMarketerNegTest() throws DeleteFailedException {
//		try {
//			Product prdt = dataServices.getProduct(5);
//			System.out.println("Product:" + prdt.getDescription() );
//			assertFalse(prdt != null && prdt.getDescription().startsWith("Steve"));
//						
//		} catch (RetrieveFailedException e) {
//			e.printStackTrace();
//			assertFalse(true);
//		}
//	}
//	
//	@Test
//	public void retrieveMarketerNegTest1() throws DeleteFailedException {
//		try {
//			Product mrktr = dataServices.getMarketer(5);
//			System.out.println("Marketer:" + mrktr.getName() );
//			assertFalse(mrktr != null && mrktr.getName().startsWith("amazon"));
//						
//		} catch (RetrieveFailedException e) {
//			e.printStackTrace();
//			assertFalse(true);
//		}
//	}
//
//	@Test
//	public void retrieveproducttest() throws DeleteFailedException {
//		try {
//			Product prdt = dataServices.getProduct(221);
//			assertFalse(prdt != null && prdt.getName().startsWith("Steve"));
//						
//		} catch (RetrieveFailedException e) {
//			e.printStackTrace();
//			assertFalse(true);
//		} catch (Exception ex) {
//			ex.printStackTrace();
//			assertFalse(true);
//		}
//	}

}
