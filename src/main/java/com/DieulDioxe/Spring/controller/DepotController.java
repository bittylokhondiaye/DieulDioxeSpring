package com.DieulDioxe.Spring.controller;


import com.DieulDioxe.Spring.model.Compte;
import com.DieulDioxe.Spring.model.Depot;
import com.DieulDioxe.Spring.model.User;
import com.DieulDioxe.Spring.repository.CompteRepository;
import com.DieulDioxe.Spring.repository.DepotRepository;
import com.DieulDioxe.Spring.repository.UserRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContextException;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/depot")
public class DepotController {

    @Autowired
    private UserRepository UserRepository;
    @Autowired
    private CompteRepository CompteRepository;
    @Autowired
    private DepotRepository DepotRepository;
    @PostMapping(value = "/add",consumes = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAuthority('ROLE_CAISSIER')")
    public Depot add(@RequestBody(required = false) Depot depot, HttpServletRequest request) {
        Date date = new Date();
        depot.setDate(date);
       String caissier=request.getUserPrincipal().getName();
       User user= UserRepository.findByUsername(caissier).orElseThrow(()-> new ApplicationContextException("User not found"));
        //user =this.getUser();

        depot.setCaissierId(user);

        Compte c = depot.getCompteId();
        int idcompte=c.getId();
       Optional<Compte> cmpt= CompteRepository.findById(idcompte);
       Compte compte = cmpt.get();
         int  montantInitial=compte.getSolde();
         int montantDeposer=compte.getMontantDeposer();
         int solde=compte.getSolde();
         int soldeFin=solde+depot.getMontant();
        compte.setMontantInitial(montantInitial);
        compte.setMontantDeposer(depot.getMontant());
        compte.setSolde(depot.getMontant()+solde);
        CompteRepository.save(compte);
        return DepotRepository.save(depot);
    }
    }

