package com.DieulDioxe.Spring.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Entity
@Table
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String NumeroCompte;

    @NotNull
    private Date DateCreation;

    @NotNull
    private   int MontantInitial;

    @NotNull
    private int MontantDeposer;

    @NotNull
    private int Solde;


    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler","partenaireId"})
    @ManyToOne(fetch = FetchType.LAZY,cascade = {CascadeType.ALL})
    @JoinColumn(name = "partenaire_id", referencedColumnName = "id")
    private Partenaire partenaireId;

    public Compte() {
    }

    public Compte(@NotBlank String numeroCompte, @NotBlank Date dateCreation, @NotBlank int montantInitial, @NotBlank @Min(75000) int montantDeposer, @NotBlank int solde, Partenaire partenaireId) {
        NumeroCompte = numeroCompte;
        DateCreation = dateCreation;
        MontantInitial = montantInitial;
        MontantDeposer = montantDeposer;
        Solde = solde;
        this.partenaireId = partenaireId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumeroCompte() {
        return NumeroCompte;
    }

    public void setNumeroCompte(String numeroCompte) {
        NumeroCompte = numeroCompte;
    }

    public Date getDateCreation() {
        return DateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        DateCreation = dateCreation;
    }

    public int getMontantInitial() {
        return MontantInitial;
    }

    public void setMontantInitial(int montantInitial) {
        MontantInitial = montantInitial;
    }

    public int getMontantDeposer() {
        return MontantDeposer;
    }

    public void setMontantDeposer(int montantDeposer) {
        MontantDeposer = montantDeposer;
    }

    public int getSolde() {
        return Solde;
    }

    public void setSolde(int solde) {
        Solde = solde;
    }

    public Partenaire getPartenaireId() {
        return partenaireId;
    }

    public void setPartenaireId(Partenaire partenaireId) {
        this.partenaireId = partenaireId;
    }
}
