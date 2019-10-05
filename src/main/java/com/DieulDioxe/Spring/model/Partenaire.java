package com.DieulDioxe.Spring.model;


import org.hibernate.jpa.internal.util.PersistenceUtilHelper;
import org.w3c.dom.Text;

import javax.persistence.*;
import javax.validation.constraints.*;
import javax.validation.constraints.Size;

@Entity
@Table
public class Partenaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String Prenom;

    @NotBlank
    private String Nom;

    @NotBlank
    private String password;

    @NotNull
    private  int Telephone;

    @NotNull
    private  int CNI;

    @NotNull
    private  int NINEA;

    @NotBlank
    private String Adresse;

    @NotBlank
    private String RaisonSocial;

    @NotBlank
    @Size(max = 50)
    @Email
    private String Email;



    public Partenaire(int id, @NotBlank String prenom, @NotBlank String nom, @NotBlank String password, @NotBlank int telephone, @NotBlank int CNI, @NotBlank int NINEA, @NotBlank String adresse, @NotBlank String raisonSocial, @NotBlank String email) {
        this.id = id;
        Prenom = prenom;
        Nom = nom;
        this.password = password;
        Telephone = telephone;
        this.CNI = CNI;
        this.NINEA = NINEA;
        Adresse = adresse;
        RaisonSocial = raisonSocial;
        Email = email;
    }


    public Partenaire() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getTelephone() {
        return Telephone;
    }

    public void setTelephone(int telephone) {
        Telephone = telephone;
    }

    public int getCNI() {
        return CNI;
    }

    public void setCNI(int CNI) {
        this.CNI = CNI;
    }

    public int getNINEA() {
        return NINEA;
    }

    public void setNINEA(int NINEA) {
        this.NINEA = NINEA;
    }

    public String getAdresse() {
        return Adresse;
    }

    public void setAdresse(String adresse) {
        Adresse = adresse;
    }

    public String getRaisonSocial() {
        return RaisonSocial;
    }

    public void setRaisonSocial(String raisonSocial) {
        RaisonSocial = raisonSocial;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }
}
