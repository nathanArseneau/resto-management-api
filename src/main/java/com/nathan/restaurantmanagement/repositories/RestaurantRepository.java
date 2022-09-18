package com.nathan.restaurantmanagement.repositories;

import com.nathan.restaurantmanagement.model.Restaurant;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRepository
  extends CrudRepository<Restaurant, Integer> {}
