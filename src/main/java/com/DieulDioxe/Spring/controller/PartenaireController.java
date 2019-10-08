package com.DieulDioxe.Spring.controller;


import com.DieulDioxe.Spring.model.Compte;
import com.DieulDioxe.Spring.model.Partenaire;
import com.DieulDioxe.Spring.model.Role;
import com.DieulDioxe.Spring.model.User;
import com.DieulDioxe.Spring.repository.CompteRepository;
import com.DieulDioxe.Spring.repository.PartenaireRepository;

import com.DieulDioxe.Spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping(value = "/partenaire")
public class PartenaireController {

    @Autowired
    private PartenaireRepository PartenaireRepository;
    @GetMapping(value = "/liste")
    @PreAuthorize("hasAuthority('ROLE_SUPER_ADMIN')")
    public List<Partenaire> liste(){
        return PartenaireRepository.findAll();
    }


    @Autowired
    private UserRepository UserRepository;
    @Autowired
    private CompteRepository CompteRepository;
    @Autowired
    PasswordEncoder encoder;
    @PostMapping(value = "/add",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    @PreAuthorize("hasAuthority('ROLE_SUPER_ADMIN')")
    public Partenaire add(@ModelAttribute Partenaire partenaire,@RequestParam("file") MultipartFile imageFile){

        String username = partenaire.getNom();
        String email = partenaire.getEmail();
        String password = partenaire.getPassword();
        UserController userController=new UserController();

        Compte compte =new Compte();
            compte.setPartenaireId(partenaire);
            SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMHHmmss");
            Date date= new Date();
            String NumeroCompte =sdf.format(date);
            compte.setNumeroCompte(NumeroCompte);
            compte.setDateCreation(date);
            compte.setMontantInitial(0);
            compte.setMontantDeposer(75000);
            compte.setSolde(75000);
            CompteRepository.save(compte);

        User user = new User();
        user.setCompteId(compte);
        user.setName(username);
        user.setProfile("admin");
        user.setStatut("BLOQUER");
        user.setUsername(email);
        user.setEmail(email);
        user.setPartenaireId(partenaire);
        String pass=encoder.encode(password);
        user.setPassword(pass);
        String profile=user.getProfile();
        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        role.setId(1L);
        roles.add(role);
        user.setRoles(roles);
        String imageName = StringUtils.cleanPath(imageFile.getOriginalFilename());
        user.setImageName(imageName);
        try {
            user.setImageFile(imageFile.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        UserRepository.save(user);

        return PartenaireRepository.save(partenaire);
    }

}
