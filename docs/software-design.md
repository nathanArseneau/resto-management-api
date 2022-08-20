# Technology Stack

| Uses              | Technology                  |
| ----------------- | --------------------------- |
| VCS               | Github                      |
| build tool        | Maven                       |
| Language          | Java17                      |
| Middleware        | Spring Boot                 |
| Data Store        | MySQL                       |
| Testing           | Junit, Mockito, Spring Test |
| E2E Testing       | ??                          |
| CI Server         | Github action               |
| Containerization  | Docker                      |
| API documentation | Open api                    |
| Event streaming   | Kafka                       |

# Frameworks

- Java spring boot
  - Spring security
  - Spring kafka
  - Spring actuator
  - Spring open api
  - Spring validation
- Hibernate

# Components diagram

> V2 will add Kafka

![Components diagram](./asset/components-diagram/components-diagram-v1.png)

# Data model

![Data model](./asset/data-model/data-model.png)

# API table

## Restaurants routes

<table>
<tr>
<td> URL </td> 
<td> Verb </td> 
<td> Roles </td> 
<td> Header/query param </td> 
<td> Request body </td> 
<td> Validation </td> 
<td> Request response </td> 
<td> Description </td> 
</tr>
<tr>
<td>

`/restaurants`

</td> 
<td>

`GET`

</td> 
<td>

`*`

</td> 
<td>

Query param

`name` - Optional <br>
`address` - Optional <br>
`dish` - Optional <br>
`rating` - Optional <br>
`page` - Optional default 1 <br>
`limit` - Optional default 10 <br>

</td> 
<td>  </td> 
<td>  </td> 
<td>

```json
[
  {
    "id": 10,
    "name": "Fogo de Chão",
    "category": "Steak house",
    "phoneNumber": "12345678912",
    "address": "836 1st St",
    "rating": null,
    "approved": false,
    "enabled": false,
    "created_at": "2021-02-097T20:45:26.433Z",
    "updated_at": "2015-02-10T19:27:16.540Z"
  }
]
```

</td>
<td>

`rating` is always null for V1

</td>
</tr>

<tr>
<td>

`/restaurants`

</td> 
<td>

`POST`

</td> 
<td>

`ADMIN`, `MANAGER`

</td> 
<td>

Header

`Authorization` - Required <br>

</td> 
<td>

```json
{
  "name": "Fogo de Chão",
  "category": "Steak house",
  "phoneNumber": "12345678912",
  "address": "836 1st St"
}
```

</td> 
<td>

`name` -> 1 and 50 char <br>
`category` -> `Steak house` | `Bar` | `resto-bar` <br>
`address` -> 1 and 255 char <br>

</td> 
<td>

```json
{
  "id": 10,
  "name": "Fogo de Chão",
  "category": "Steak house",
  "phoneNumber": "12345678912",
  "address": "836 1st St",
  "rating": null,
  "approved": false,
  "enabled": false,
  "created_at": "2021-02-097T20:45:26.433Z",
  "updated_at": "2015-02-10T19:27:16.540Z"
}
```

</td>
<td>  </td>
</tr>
</table>
