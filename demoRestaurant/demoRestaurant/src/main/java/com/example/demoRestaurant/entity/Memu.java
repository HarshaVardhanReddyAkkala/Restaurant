package com.example.demoRestaurant.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Data")
public class Memu {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String ItemName;
   private String FoodType;
   private Long Price;
   
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getItemName() {
	return ItemName;
}
public void setItemName(String itemName) {
	ItemName = itemName;
}
public String getFoodType() {
	return FoodType;
}
public void setFoodType(String foodType) {
	FoodType = foodType;
}
public Long getPrice() {
	return Price;
}
public void setPrice(Long price) {
	Price = price;
}
public Memu(Long id, String itemName, String foodType, Long price) {
	super();
	this.id = id;
	ItemName = itemName;
	FoodType = foodType;
	Price = price;
}
public Memu() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "Memu [id=" + id + ", ItemName=" + ItemName + ", FoodType=" + FoodType + ", Price=" + Price + "]";
}
	
   
   
}
