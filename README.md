# Product Pagination and Sorting Application

This project is a full-stack application that provides a paginated and sortable view of products. The backend is built using Spring Boot, and the frontend is developed using React. 

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The application allows users to view a list of products with pagination and sorting functionalities. Users can retrieve products in chunks, sort them by various fields, and load more data dynamically.

### Features

- **Pagination**: Fetch products in chunks to avoid loading all data at once.
- **Sorting**: Sort products based on specified fields (e.g., ID, name) in ascending or descending order.
- **Dynamic Loading**: Load more products on demand as users scroll.

## Technologies Used

### Backend

- **Java 11**: Programming language for backend development.
- **Spring Boot**: Framework for building the RESTful API.
- **Spring Data JPA**: To handle data access with pagination and sorting.
- **H2 Database**: In-memory database for storing product data (for development).
- **Maven**: Dependency management and build tool.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **Material-UI**: React component library for building responsive user interfaces.
- **React Hooks**: For managing component state and lifecycle.

## Backend Setup

### Prerequisites

- Java 11 or higher
- Maven

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/product-pagination-sorting.git
