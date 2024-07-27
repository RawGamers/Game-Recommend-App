package com.example.gamerecommendapp;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class Game {
    /** 제목 */
    String title;
    /** 카테고리 */
    List<String> categories;
    /** 이미지 */
    String url;
}
