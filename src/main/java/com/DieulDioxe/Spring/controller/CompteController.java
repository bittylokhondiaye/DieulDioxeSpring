package com.DieulDioxe.Spring.controller;


import com.DieulDioxe.Spring.model.Compte;
import com.DieulDioxe.Spring.model.Partenaire;
import com.DieulDioxe.Spring.repository.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;


@RestController
@CrossOrigin
@RequestMapping(value = "/compte")
public class CompteController {
    @Autowired
    private CompteRepository CompteRepository;
    @PostMapping(value = "/add",consumes = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAuthority('ROLE_SUPER_ADMIN')")
    public Compte add(@RequestBody(required = false) Compte compte){
        Partenaire partenaire = new Partenaire();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMHHmmss");
        Date date= new Date();
        String NumeroCompte =sdf.format(date);
        compte.setNumeroCompte(NumeroCompte);
        compte.setDateCreation(date);
        compte.setMontantInitial(0);
        int montantDeposer = compte.getMontantDeposer();
        int montantInitial = compte.getMontantInitial();
        compte.setSolde(montantDeposer+montantInitial);
        return CompteRepository.save(compte);
    }
}
