package com.nathan.restaurantmanagement.controllers;

import com.nathan.restaurantmanagement.model.Restaurant;
import com.nathan.restaurantmanagement.repositories.RestaurantRepository;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

  @Autowired
  RestaurantRepository restaurantRepository;

  @GetMapping
  List<Restaurant> getAll() {
    List<Restaurant> result = new ArrayList<Restaurant>();
    restaurantRepository.findAll().forEach(result::add);
    return result;
  }

  @PostMapping
  Restaurant createOne(
    @Valid @RequestBody Restaurant restaurant,
    BindingResult br
  ) {
    if (br.hasErrors()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }

    return restaurantRepository.save(restaurant);
  }
}
