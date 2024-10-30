package com.pavan.pagination.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.pavan.pagination.entity.Product;
import com.pavan.pagination.repository.ProductRepository;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    public void addAllProducts(List<Product> productLst) {
        productLst.forEach(productRepository::save);
    }
    
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsByPage(int id) {
        Pageable pageable = PageRequest.of(id, 10);
        return productRepository.findAll(pageable).getContent();
    }

    public List<Product> getAllProductsByPage(int page, int size, String sortBy, String sortDirection) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortBy);
        Page<Product> productPage = productRepository.findAll(PageRequest.of(page, size, sort));
        return productPage.getContent();
    }
}
