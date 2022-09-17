# Test plan

| description                                                                                |
| ------------------------------------------------------------------------------------------ |
| should create a new restaurant                                                             |
| should not create a restaurant if name is empty                                            |
| should not create a restaurant if phone number doesn't respect the format +1xxxxxxxxxx     |
| should not create a restaurant if the category is not provided                             |
| should not create a restaurant if the category is not part of the available categories     |
| should not create a restaurant if there is more field provided                             |
| should get a list of restaurant                                                            |
| should get a empty list of restaurant                                                      |
| should get a list of restaurant with a filter                                              |
| should throw a 400 if the filter is invalid                                                |
| should get a restaurant by id                                                              |
| should throw a 404 if the restaurant id is not found                                       |
| should be able to create a dish for a valid restaurant                                     |
| should not be able to create a dish if the restaurant doesn't exist                        |
| should not be able to create a dish if the name is empty or null                           |
| should not be able to create a dish if the price is negative or 0                          |
| should not be able to create a dish if the price is null                                   |
| should not be able to create a dish if the category is not valid                           |
| should get all the dishes for a restaurant                                                 |
| should get a empty list if the restaurant doesn't have any dishes                          |
| should throw a 404 if the restaurant is not found                                          |
| should add a dish availability                                                             |
| should create a dish availability if no start date provided the dish is available from now |
| should not add a dish availability if end time is pass                                     |
| should not create a dish dish availability if the end date is not provided                 |
| should be able to place and order for 1 item                                               |
| should be able to place and order for more than one 1 item                                 |
| should not be able to place an order if the restaurant doesn't exist                       |
| should not be able to place an order if the dish doesn't exist                             |
| should be able to get the list of item in an order                                         |
| should not be able to get a list of item if the order number doesn't exist                 |
| should crate a user                                                                        |
| should not create a user if username is empty or less then 3 char                          |
| should not create a user if password is empty or less then 5 char                          |
| should not create a user if the role is not provided                                       |
| should not create a user if the role is invalid                                            |
