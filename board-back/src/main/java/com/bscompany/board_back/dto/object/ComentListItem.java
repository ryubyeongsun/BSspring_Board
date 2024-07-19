package com.bscompany.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ComentListItem {
    private String nickname;
    private String profileImage;
    private String writeDatetime;
    private String content;
}
