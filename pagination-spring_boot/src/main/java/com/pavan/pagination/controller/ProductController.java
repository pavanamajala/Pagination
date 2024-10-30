package com.pavan.pagination.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pavan.pagination.entity.Product;
import com.pavan.pagination.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<String> addAllProducts(@RequestBody List<Product> productLst) {
        productService.addAllProducts(productLst);
        return new ResponseEntity<>("Added Successfully", HttpStatus.OK);
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/get-page/{id}")
    public ResponseEntity<List<Product>> getAllProductsByPage(@PathVariable int id) {
        return new ResponseEntity<>(productService.getAllProductsByPage(id), HttpStatus.OK);
    }

    @GetMapping("/get-sort-page")
    public ResponseEntity<List<Product>> getAllProductsByPage(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam String sortBy,
            @RequestParam String sortDirection) {
        return new ResponseEntity<>(productService.getAllProductsByPage(page, size, sortBy, sortDirection), HttpStatus.OK);
    }
}
