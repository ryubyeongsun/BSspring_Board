package com.bscompany.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class favoriteListItem {
    private String email;
    private String nickname;
    private String profileImage;
}
