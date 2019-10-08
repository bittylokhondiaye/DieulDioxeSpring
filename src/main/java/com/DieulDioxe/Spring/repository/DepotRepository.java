package com.DieulDioxe.Spring.repository;

import com.DieulDioxe.Spring.model.Depot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DepotRepository extends JpaRepository<Depot, Integer> {
}
