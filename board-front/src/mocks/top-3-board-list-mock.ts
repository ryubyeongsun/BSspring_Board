import { BoardListItem } from "types/interface";

const top3BoardListMock: BoardListItem[] = [
    {
        boardNumber: 1,
        title: "오늘 점심 뭐먹지 맛난거 먹고싶은데",
        content: "짜장면 김치찌개 족발 뭐먹을까 질문 받음",
        boardTitleImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBASEhIQFRAQEBcVEBAPFRAPFQ8WFRIWFxUVFRYYHSggGBomGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHR0tLS0tLS0tLS0tLS0tKy0tLS0rLSstLS0tLS0tKystLS0tLS0tKy0tNystLSstLSstK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xABAEAABBAADBAcEBwcEAwEAAAABAAIDEQQhMQUSQVEGEyJhcYGRBzKhsRQjQlKiwdFicoKSsuHwM1Nz8WOz0hX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgMAAgIDAAAAAAAAAAABAhEDITESQSIyBEJR/9oADAMBAAIRAxEAPwDurTtQQt9MNp2hRQkNpWhRQgbTStRCdoG0kKKEDaQTUVgbc2k3DQSSu0Y26OVngPM0PNB724b2odJSLwkRq2/XuHI5hnmKJ8QOKrVpUsZiXSyPe42+Rxc48y42fmlERx0+fcs7d1pJpm4Vt55nvK92s3nCzTSczpxWLDPeQHgAstpVfQbLpNhQzddFnC5oDSOddoeP6rn2P4EDzW8jxBcxzT7rBTWgCgbWjnAs18Ejr1G7yIUgwDT1H5rzhB/zJe4aeHpomTyewHXTny7wvMPI97Q6O/VejpLusjyORXjvf371IWF7O+kZY8YWU9l3+kT9kk3u+asxfOmGk3SKNAG2niwjQ+qu3oftr6XhmuP+ozsSj9oAUfAgg+qrG7TY36LSQqSEJIQDSRaLQDQkhANO0kIB2nainaAaEk0JY6E0lQCEIQAmEkWgGlaaVoBoQhIGq/8Aa3tLcghhBzleXOH7Men4iP5V37jkqM9oe1PpGPm3TbIahjrT6v3z5vL/AIKcrqLxnbnbS1NKJXoxZNGwwTAB8ysxvHuWPs+EuyHHjrQ4roMDszeoAZD41mfjSrc0rHC3pgxMpjsuZy/ZaXH5LXTR535/AH81Zc/RcjD5D6xg3iB9rLtN88x4rmMNsnea5tZg00nmBbL8Qa81n82t4f8AHNxNHhfDn4d69HFbbFbJIjLwDuGzQ1aQaNeBWjlBv5Ece9aTLpllhcennOAc7zXlvIeaPcfgk/RLaNE7I9y6/wBnW2DDiQwnszgRu7nAkxn8Tm/xjkuPDsqTw0xa7IkHgRwIogol7Gn0gDaFrOju0PpGGil4yMBd3O0d8QVswVqgJBNCASSZQgC0WhCAaErTQDQlaEEdotJCCryQhCoghKk0AUhCEAIQkgGi1G0Wg2FtvHdRBLJ/txud/KL+dDzXzu55c4kmycyeZ1J9VcntNxe5gJOcrmtru3gVTEeqzzq8YmSvbDMJIHMryOZW36Owb0oNXui65ngPMkLG1rjN3Te4PCdUxoz3na9waLPzHqF3/RvZo3Wkj3iPQGz8QVzceELpSxue7uQg83uNyu9MlYOAw+4Y2jQXXkB/dRvp2a02rIhVVw+a5j/89jJntoU4NdR4gOq/xBdc0ZLS7WhAnw7uDy+Bx5dazeafJ0X4kJxrQT4FrZZYSMpGmVg8CGSgfzMPmVWu2NnOilcw8zV5AkajwcDfryVxbbg7EOJF3AQ94HGNzN2Yd9NcXVxLAFzvTHYPWML21YGbhwoZP8uPcXJbOyZTSsYMP1hLOJFs77yz7w7dB8SVgOaWktIWyxTXMcHgVIx3ab91wNOb4EZgradJMCJY4cXHpOyyebgKdfI2B6q9uf4b6+45N2S83P7TD30V7yt/zksN7qNeB9FbLS3vZRtDehlhOsTg5vg+7+I+K75U37M8ZuY1reEzHN863h/SrivJa43pGXqaErQmnZoQhACEIQAi0IQYTSRaAaEItCa8E0gglUSSFFFoCSRSRaAkFFIFMlAChJoVK1F+iArX2wYvLDxDQlzz/CGgf1fBcAMCW4ds5cztuLQy+2KcW3XLJdn7Xz9dhv8Aif8A1NJ+YXH4JofC7nFI0nvZIfycPxBY8nrfCTTEboSuu6K9XAXSy+7ECaGZe5oyaBxNn1XMztaDQ0vjx9F1+y8GxztwtLgz33Z7pfyLtKBJJPPd5LLJtxTvp0vRzaUDHMMru20Fzz7wdLJe8RzAGh5OXUQ9IsMXx0/i7gRqwkfJcI/aODia8NgdP1TS6V7Gta1ueZt2mZoDXNZezNq4KZzGiKWCTeBY2UNLZOYa5pIujoatTq63pv1vVq0cPimvGR1WNtyAvhfXvMqRnjG4PrzDSPNa/Zz92qNjmFuxmEis1WtO1YxHvH3XDeAA4PpwHkXV5FcjJ0lEQ6gRucG2IbsktHut7y0ZeA8VvsVgnxP7ID43E2wlrCyzeRORF2efaPNcP0r6QCKoxFE4P3vrJiQzejIDgwDM0TV5ZhE3bqKupN7aXbmHkc8vEbgHCiADoNMuY0HMClPorjQ4Pwktbkp34CdGv4jwOf8AM5Z2AxuJdD10kZfhnS9W9kb3dkgBwLh7z2URxNZ3ovfaXRrrWCbDgObqWNIa5p+8w6BwNGjV1zTvXVRJv8sXL9I9m9RJVEBwujwNkEfBaf6Nu7ziLsZDlVG/mt9t7HSSiMSt7bOw54BAfVZkHNruYPetfuPaDlvNrzAVTxjlPyeexMT1OJhf9yVvzr5FX9G+23zHzC+bmXvEHUuPlav7oxi+uwmHk+9Cy/3g0Nd8WlbcfmmGbcBNRTBVoNCEigkkKIKaAaEkIM0IQgwi0wikJrHKVoQqI0EpWkgJWi1FBKAaSEkAyhIlIoCtfa5B2MO/7sj2+T2NI9DG71C4jo03exMcdgCe4i6r3d/3XAcw4NI8FaXtOwu/gXO4xyMd5E7p/qVPREtc0gkOa4FpGRaQbBHgc1lyTtthXS7S2cYZYWPaAd/MtO8Hg6kHlr6lWfgejQdhgw2N5tuqxmRZ+ZXCbWnGIiw+LNWXM3h913XBkwPmW+o5q6sERS5q7sfxt04XDbAYyKbDOYOrlaWktcGuomw4X9oGj/Csbo/0NiwxmJcJHSscxoIbEIw7IuppJL6GR0CsqfZ7H6gHxzXnFs1jNAB4ClUyujvwt3rtrtn4NwY3eNvAAcRkHHifNb2CLsrwcAMlnYb3UkZWtXtDCbwNa0QDyyyK47avRuGaOOKVhLYiercwGNzL1ALdQaGRyyBViuAXk6BpQeOU1qzbldlbGjbEyFrT1bMwDZsnUuccyTzW+g2exraAFLPZCApPySp3P6ivPaHsCN0O+GgOD2CwM6LgKvzVbYmAQwyhwsOYTE461nTa5k8fHuVxdMbcxjR/uh7hzDGu/NzfRVd7Q9oxgjDM3XSMdchaQ4MAyDLGVnI1wrvSx3vQy18d31wschyvmrk9ncx+jCM/Zp7P3ZG3/WJfRU04a1rr6Urm6KR7kWDPB8RjPeR9ZGfQyeq6uP1w5eOuBQvNrlJaM07QoppEaLQkEBNCjadoNJCVoQEkrSTQljpIRaoBCVotANCiUWgGkkmgApIQgND06beAxf8AwOPmKI+So9wzVz+0SfdwMjf9xzW+V2fgPiqfLFlyexrh4nBjZGMljB7EoG+3gS0tcHa620K/uiu0evw0EvGSJhd3EtG8PW188O1Ktv2WY7ewxiJzheaH7L+0PiXDyWOUdPDfpaUD7C9X6LW4aVZofYUbaMKWQl1DzW6wjOyuc2u6SNrnRt3iW5Dvzq+5YmzNvz7jRLG5j6za23tuuDq+dJ7V8bZ06eV1WiORabZ+JxUm+JWRtBPYMZc7s95I18MlsgKQVmmVvrylco768pXpEqv21bSez6JGx7mlxlc4sc5hIAjaAa4HePoqnYc11ntS2l1+0pADbcOxsI4ixb3/AInkfwrkm6q5OmGd3WQG9od/6K69kRn6FHQ7bA1zR3x5gDxbl5qm90b7PI/56FXV0ckHUMH7Lcwbza0NPllfmtuL7ZZNxG8OaHA5EAtPMEZFTCxMK7cJj4ax/u37o8NK5bqylrWaYTtRTUkkhRBTBQaSdKNpoCSEgUIKmhCEExrSSQqBlCFFxQDRaihBJJEqJStATtMlQJXnK81kmbivaPiOwxupLjujkBqfiB5qt49PirB6a4YRsklfnJI0tbejbyAHhZ9SeKr45X6LLP1rGI/Urr+hu1Po2Kis0ydoY/gAXZxk/wAVj+Jcm9vxP6rImO9GB922+XBZ2baY3V2+i8NLoskYrd1XB+z3pJ9Kh3Hn6+EU+9ZG6Nk89D3+K7HEYdsrS12hGeoyWF6dU1e2VJtGIDtOaPE0vKLaWHdpIzJcTtvoq2M78Zl6sfZa+Q7ngL0WAzY7dW4iUHk/t/FG3fxfxMM8dyrUg2jAdHt7hoiXFN3gLGfBV1g+jHWuG9NI/MEMaSwCuJIpdhgOj0MGbGAPoBzzm51c3HOkbrDn4cOP77blptaPpht1mBwsszq3gKiaftyOsMb6gk9zStsH0FSvtl2i9+Kgiv6tkRc1vAuc6i499NAHLPmid1yZdTbiJHF7nPcbc4lzieJOZJ7ybXlu5r1gzHkmG2tnOy8L2i3yGXC9Pmrh2DBTBRrJrhQBBDmgGx4tuxzCqo4Isa11G6B8QQa/9birX6PG4oiNDH5cDl8VrxzScm1lh3hyIzHce75L0icdCpJhaMtpAp2oBStIJJqFpgpGkpKAKaCSBTtRtNAqVpWhMIJioQhUAkSkSkg9Go7yVoTI7SStFoPRpFFrFx2LbG2yWjlvED/tAcX7QZmkAHUGmi8rNGz5ZBcRh8K6VzY2C3OP8oGrjyC67pU1z45JGscQ3dJkcN0AbwsNBzNuIs0BkFodmyCFuJkNFw3Y2Di5zi6x3DJtrPObyaRqosPb9zvIPdqPnSxg7XvCztnOp7idRG7x1GfwWHO3tHz8s1nfDjN6IYsxY2BwNdvdvucCCPDRX1szGB4o5Gswvn3ZLD9JirmHeGRKurB2WtINGtQufP118PeLqThg9Yh6OxE2QDaxsJtQsNPy7+B/RbeLaDToiNZ88fE8JgGxgBooLJkFLy+nNpYkuIL8uHzRUXdvZTy3poqS9q4vGMP/AIiPR391dUzaaqW9pHanLuTa9XBLH9iz/SuQwR94LIDad4j+6x8MKcFsnRdlruRo/MLojlqycHsuOXDsaeMO7fOjcbvxH1W06P4R0cbB9y2keBIseIpajoLjxJFuE9qPKtbHB3pu34LrmNAGS6OtMrXoCnagCnaEJWmFC0w5Bpgp2oWpICVphRBTCk0wpAqAKYQSaEgmgmMkSglRJVGCVElFpEpmLStRKiSgk7StRtK0Gm7NY4wrLuhfPj66r13ki5AajpVE12FmBIA6sjlmdPE3SrqDCPltwB7b/qWni9+W+f3QD6BWbicIHnefmAeyDoDzrn3rSR7N6oSE5boLWPJoRscbIvS8z6DklZtUrhn4bq3uqg1zHht8mu3SfFaqfMk/5kt1trFxukAj91sYYDwOdmlqOrLyAOaxyVG56JYHfnaeTK+KtjAQkN8FXnQtlSDy+GatKCOgDzC5su67cOsWPiMNvBYDMKWnK1vwxAw6nTSZ6eWDiWwjjSjjpewCGdu2Jjz2SqX6eNuTz/NXRjRbSqb6d/6g7/lZ/wDkp4+i/pXJsjzHqt/sKESl8TtJWUDycNPitVG27PeAPADP5rL2Tid14PI51ke+l0TquRu9jskw84Huvaao5B4z48P7Kx8HiQ9ueTuLTlSxMFsiLHwte1we5oycAWvaazBB+XMZLKjwUkQDXWa0uwfit8emeTJTXmHKW8qSkhRtFpEmCp2vIFO0B7BMFQBUkaNNO1AJqQmCnaiChCWOkUWolWoFRKCVAlADioEoc5JrS40EAi5RLlmx7Nkd9ly2eC6OuJt5oepS3Bpo4YnONAH0WdDsaZ2e7XjkurwuBjiFNbnz1JWQGqbkr4tPhNiRsALgC7iTnXgFx/tJjduNYxhOZO8RQaBXDUqzA1c90r2T9JAZkOycyN6roXXE5KMsummGM2+bjG5ztxoJJNdkX6Uu42J0QdHGXyD61zaDfub2WffS7zZHRCLCkuYwGQ6yPou8uXDRbGbZ0hFZDI+V/wDa57la6MMMYqvobCSS4Cy2TMeV16bwVq4cNcwVp8ly2wOjUuHxU4I+qkJc0jiC4uHoS8eFLs4cDSlpfJHkyJezIlksgpegYnpO2N1al1ayN1PcRottdi4+yfBUr08jP0juawV35u/VXy+C1VHtS2YGPjeNXu3Q3idCiej+tjgsJg3SW1ozDScuF6rGfhZInUQc/nwP5K2+h3Q5zIt6TJ76LuBHILfYrodDIO0AfGlVyqZx467vbkvZRtMGUx/eGmWo/tforg6hrhmAVyfRzovHh5gQAaaaJA3h5rtGMoLXC9MuSTbRY7YTXG20O5abF7Kkjs1bRxFldu9q8XNCuZVlcXAGwi12uI2XG/VovmMlqcV0cIFsN9xVfKJuNaEFSBXrJgZG/ZP6rxc0jVVsnoCphy8QVIFBPZSC8wpApBMJqITtIVjWokoQrN5kqBKEID1weEfKaaCefcut2RshrG2QC7mhCjKqjadWikIWbRBwTakhNL1CxMc3Np7iPzQhTl4vH14BqCxCFm1RLFIBCElHuo3UIQDDUUmhABC53G9G2z4pk8p3hH/px6NbYNnvOnoEIQN6b+KKhSmWoQml6YCPtOPLL9fyWeAhC0njHK9oyLyCEJkmE0IQCMYOoyWp2hsNjx2ey74H9EITlKzbQ4zZUsWrSRzGYWGEIWku4zr0aVNCEEYUkISN/9k=",
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2024.07.14. 00:54:27",
        writerNickname: "안녕하세요나는주코야키",
        writerProfileImage: "data:image/jpeg;base64,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",
    },
    {
        boardNumber: 1,
        title: "오늘 점심 뭐먹지 맛난거 먹고싶은데",
        content: "짜장면 김치찌개 족발 뭐먹을까 질문 받음",
        boardTitleImage: null,
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2024.07.14. 00:54:27",
        writerNickname: "안녕하세요나는주코야키",
        writerProfileImage: null,
    },
    {
        boardNumber: 1,
        title: "오늘 점심 뭐먹지 맛난거 먹고싶은데",
        content: "짜장면 김치찌개 족발 뭐먹을까 질문 받음",
        boardTitleImage: null,
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2024.07.14. 00:54:27",
        writerNickname: "안녕하세요나는주코야키",
        writerProfileImage: null,
    },
    
       


];

export default top3BoardListMock;