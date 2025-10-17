package com.example.demoRestaurant.repo;

import java.awt.Image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demoRestaurant.entity.Memu;



@Repository
public interface MemuRepo extends JpaRepository<Memu, Long>{

}
