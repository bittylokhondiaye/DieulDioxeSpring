package com.DieulDioxe.Spring.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.Hibernate;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Optional;

@Entity
@Table
public class Depot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Min(75000)
    private int Montant;

    @NotNull
    private Date Date;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler","compteId"})
    @ManyToOne()
    @JoinColumn(name = "compte_id", referencedColumnName = "id")
    private Compte compteId;


    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler","caissierId"})
    @ManyToOne()
    @JoinColumn(name = "caissier_id", referencedColumnName = "id")
    private User caissierId;

    public Depot() {
    }

    public Depot(@NotNull @Min(75000) int montant, java.util.@NotNull Date date, Compte compteId, User caissierId) {
        Montant = montant;
        Date = date;
        this.compteId = compteId;
        this.caissierId = caissierId;
    }

    public int getMontant() {
        return Montant;
    }

    public void setMontant(int montant) {
        Montant = montant;
    }

    public java.util.Date getDate() {
        return Date;
    }

    public void setDate(java.util.Date date) {
        Date = date;
    }

    public Compte getCompteId() {
        return compteId;
    }

    public void setCompteId(Compte compteId) {
        this.compteId = compteId;
    }

    public User getCaissierId() {
        return caissierId;
    }

    public void setCaissierId(User caissierId) {
        this.caissierId = caissierId;
    }
}
