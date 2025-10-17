package com.example.demoRestaurant.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name="Data")
public class Memu {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @SequenceGenerator(name = "Menu_seq", sequenceName = "Menu_sequence", allocationSize = 1)
   private Long id;
   private String itemName;
   private String description;
   private Long price;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getItemName() {
	return itemName;
}
public void setItemName(String itemName) {
	this.itemName = itemName;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public Long getPrice() {
	return price;
}
public void setPrice(Long price) {
	this.price = price;
}


public Memu(Long id, String itemName, String description, Long price) {
	super();
	this.id = id;
	this.itemName = itemName;
	this.description = description;
	this.price = price;
}

public Memu() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "Memu [id=" + id + ", itemName=" + itemName + ", description=" + description + ", price=" + price + "]";
}
   

	
   
   
}
