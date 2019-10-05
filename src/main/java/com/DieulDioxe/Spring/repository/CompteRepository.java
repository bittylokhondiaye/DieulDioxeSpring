package com.DieulDioxe.Spring.repository;

import com.DieulDioxe.Spring.model.Compte;
import com.DieulDioxe.Spring.model.Partenaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CompteRepository  extends JpaRepository<Compte, Integer> {
}
