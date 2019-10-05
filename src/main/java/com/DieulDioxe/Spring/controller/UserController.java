package com.DieulDioxe.Spring.controller;


import com.DieulDioxe.Spring.model.Role;
import com.DieulDioxe.Spring.model.RoleName;
import com.DieulDioxe.Spring.model.User;
import com.DieulDioxe.Spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserRepository UserRepository;
    @GetMapping(value = "/liste")
    @PreAuthorize("hasAuthority('ROLE_SUPER_ADMIN')")
    public List<User> liste(){
        return UserRepository.findAll();
    }
    @Autowired
    PasswordEncoder encoder;
    @PostMapping(value = "/add",consumes = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasAuthority('ROLE_SUPER_ADMIN')")
    public User add(@ModelAttribute User user,@RequestParam("file") MultipartFile imageFile){
        System.out.println(user.getPassword());
        String password=encoder.encode(user.getPassword());
        user.setPassword(password);
        String profile=user.getProfile();
        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        //String RoleName name;
        if(profile.equals("admin")){
              role.setId(1L);
        }
        else if(profile=="user"){
            role.setId(2L);
        }
        else if(profile=="caissier"){
            role.setId(4L);
        }
        roles.add(role);
        user.setRoles(roles);
        String imageName = StringUtils.cleanPath(imageFile.getOriginalFilename());
        user.setImageName(imageName);
        try {
            user.setImageFile(imageFile.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return UserRepository.save(user);
    }

}
