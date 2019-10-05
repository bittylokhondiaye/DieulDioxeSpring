package com.DieulDioxe.Spring.model;


import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "compte_id", referencedColumnName = "id")
    private Compte compteId;

    @ManyToOne(fetch = FetchType.LAZY)
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
}
