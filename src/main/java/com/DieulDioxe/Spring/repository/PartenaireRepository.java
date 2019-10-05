package com.DieulDioxe.Spring.repository;


import com.DieulDioxe.Spring.model.Partenaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  PartenaireRepository extends JpaRepository <Partenaire, Long>{
}
