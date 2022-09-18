package com.nathan.restaurantmanagement.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

@Entity
public class Restaurant {

  public enum RestaurantType {
    STEAK_HOUSE,
    BAR,
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @NotNull(message = "Cannot be null")
  @Length(min = 3, max = 255, message = "Must be between 3 and 255")
  private String name;

  @NotNull(message = "Cannot be null")
  @Enumerated(EnumType.STRING)
  private RestaurantType category;

  @NotNull(message = "Cannot be null")
  @Pattern(regexp = "(\\+1|0)[0-9]{10}")
  private String phoneNumber;

  @NotNull(message = "Cannot be null")
  @Length(min = 3, max = 255, message = "Must be between 3 and 255")
  private String address;

  private boolean approved;
  private boolean enabled;

  public Restaurant() {}

  public Restaurant(
    Integer id,
    String name,
    RestaurantType category,
    String phoneNumber,
    String address
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public RestaurantType getCategory() {
    return category;
  }

  public void setCategory(RestaurantType category) {
    this.category = category;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }
}
