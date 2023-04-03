package com.climate.group3.vis1;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="visual1")
public class visual1 {
    
    private int year;
    private double anomaly;
    private double lower;
    private double upper;

    public visual1() {
    }

    public visual1(int year, double anomaly, double lower, double upper) {
        this.year = year;
        this.anomaly = anomaly;
        this.lower = lower;
        this.upper = upper;
    }



    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getAnomaly() {
        return this.anomaly;
    }

    public void setAnomaly(double anomaly) {
        this.anomaly = anomaly;
    }

    public double getLower() {
        return this.lower;
    }

    public void setLower(double lower) {
        this.lower = lower;
    }

    public double getUpper() {
        return this.upper;
    }

    public void setUpper(double upper) {
        this.upper = upper;
    }


}
