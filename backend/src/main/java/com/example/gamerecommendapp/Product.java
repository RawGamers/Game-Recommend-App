package com.example.gamerecommendapp;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Product {
    private String url;
    private String image;
    private String name;
    private String price;
}
