package com.pavan.pagination.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.pavan.pagination.entity.Product;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Integer> {
	
	List<Product> findAll();

	Object save(Product e);
}
